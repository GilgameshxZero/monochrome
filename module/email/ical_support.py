"""iCalendar content lines and event values used by mutt-ical, standard library only.

Unfolds RFC 5545 content lines, preserves unknown properties, and understands
dates, UTC/floating/TZID times, durations, quoted parameters and VTIMEZONE rules.
This is an event reader/writer, not an occurrence-expansion engine.
"""
from calendar import monthrange
from datetime import date, datetime, timedelta, timezone, tzinfo
from functools import lru_cache
from io import BytesIO
from pathlib import Path
import re
from zipfile import ZipFile
from zoneinfo import ZoneInfo, ZoneInfoNotFoundError

TEXT = {'summary', 'description', 'location', 'uid', 'comment', 'contact', 'prodid', 'tzname'}
DATES = {'dtstart', 'dtend', 'dtstamp', 'created', 'last-modified', 'recurrence-id'}


def split_quoted(value, separator):
    result, start, quoted = [], 0, False
    for index, char in enumerate(value):
        if char == '"':
            quoted = not quoted
        elif char == separator and not quoted:
            result.append(value[start:index])
            start = index + 1
    result.append(value[start:])
    return result


def unescape(value):
    return re.sub(r'\\([nN,;\\])', lambda m: '\n' if m[1].lower() == 'n' else m[1], value)


def escape(value):
    return str(value).replace('\\', '\\\\').replace('\r\n', '\n').replace('\r', '\n').replace(
        '\n', '\\n').replace(';', '\\;').replace(',', '\\,')


def fold(line):
    lines, current = [], ''
    for char in line:
        if len((current + char).encode('utf-8')) > 75:
            lines.append(current)
            current = ' '
        current += char
    return '\r\n'.join(lines + [current])


@lru_cache(maxsize=64)
def named_zone(name):
    try:
        with ZipFile(Path(__file__).with_name('timezones.zip')) as archive:
            data = archive.read(name)
        return ZoneInfo.from_file(BytesIO(data), key=name)
    except (KeyError, FileNotFoundError):
        try:
            return ZoneInfo(name)
        except (ZoneInfoNotFoundError, ValueError):
            raise ValueError('Unknown calendar timezone: ' + name) from None


def plain_date(value):
    if re.fullmatch(r'\d{8}', value):
        return datetime.strptime(value, '%Y%m%d').date()
    utc = value.endswith('Z')
    parsed = datetime.strptime(value.rstrip('Z'), '%Y%m%dT%H%M%S')
    return parsed.replace(tzinfo=timezone.utc) if utc else parsed


def offset(value):
    match = re.fullmatch(r'([+-])(\d\d)(\d\d)(\d\d)?', value)
    if not match:
        raise ValueError('Invalid calendar UTC offset: ' + value)
    duration = timedelta(hours=int(match[2]), minutes=int(match[3]), seconds=int(match[4] or 0))
    return duration if match[1] == '+' else -duration


class EmbeddedZone(tzinfo):
    """VTIMEZONE observances, including yearly ordinal-weekday DST rules."""
    def __init__(self, component):
        self.component = component
        self.key = component.tzid.value
        self.observances = component.contents.get('standard', []) + component.contents.get('daylight', [])
        if not self.observances:
            raise ValueError('VTIMEZONE has no observances')
        self.base = min(offset(item.tzoffsetto.value) for item in self.observances)

    def tzname(self, dt):
        return self.key

    def transitions(self, year):
        result = []
        for item in self.observances:
            start = plain_date(item.dtstart.raw)
            before, after = offset(item.tzoffsetfrom.value), offset(item.tzoffsetto.value)
            dates = [start]
            for prop in item.contents.get('rdate', []):
                dates.extend(plain_date(part) for part in prop.raw.split(','))
            if 'rrule' in item.contents:
                rule = dict(part.split('=', 1) for part in item.rrule.raw.split(';'))
                if rule.get('FREQ') != 'YEARLY' or set(rule) - {'FREQ','BYMONTH','BYMONTHDAY','BYDAY','UNTIL','INTERVAL'}:
                    raise ValueError('Unsupported VTIMEZONE recurrence: ' + item.rrule.raw)
                for current_year in range(max(start.year, year - 2), year + 2):
                    if (current_year - start.year) % int(rule.get('INTERVAL', '1')):
                        continue
                    month = int(rule.get('BYMONTH', start.month))
                    days = monthrange(current_year, month)[1]
                    if 'BYMONTHDAY' in rule:
                        day = int(rule['BYMONTHDAY'])
                        if day < 0:
                            day = days + day + 1
                    elif 'BYDAY' in rule:
                        match = re.fullmatch(r'([+-]?\d+)(MO|TU|WE|TH|FR|SA|SU)', rule['BYDAY'])
                        if not match:
                            raise ValueError('Unsupported VTIMEZONE BYDAY')
                        ordinal = int(match[1])
                        weekday = ['MO','TU','WE','TH','FR','SA','SU'].index(match[2])
                        candidates = [d for d in range(1, days + 1) if date(current_year, month, d).weekday() == weekday]
                        day = candidates[ordinal - 1 if ordinal > 0 else ordinal]
                    else:
                        day = start.day
                    candidate = start.replace(year=current_year, month=month, day=day)
                    if candidate >= start and ('UNTIL' not in rule or
                            (candidate - before) <= plain_date(rule['UNTIL']).replace(tzinfo=None)):
                        dates.append(candidate)
            for candidate in dates:
                result.append((candidate.replace(tzinfo=None) - before, before, after))
        return sorted(set(result))

    def fromutc(self, dt):
        utc = dt.replace(tzinfo=None)
        transitions = self.transitions(dt.year)
        selected = transitions[0][1]
        fold_value = 0
        for instant, before, after in transitions:
            if instant > utc:
                break
            selected = after
            fold_value = int(after < before and utc < instant + before - after)
        return (utc + selected).replace(tzinfo=self, fold=fold_value)

    def utcoffset(self, dt):
        if dt is None:
            return self.base
        wall = dt.replace(tzinfo=None)
        transitions = self.transitions(dt.year)
        selected = transitions[0][1]
        for instant, before, after in transitions:
            low, high = instant + min(before, after), instant + max(before, after)
            if low <= wall < high:
                # Preserve dateutil/vobject's choice of post-transition offset
                # for a nonexistent spring-forward wall time.
                return after if after > before or dt.fold else before
            if wall >= high:
                selected = after
        return selected

    def dst(self, dt):
        return self.utcoffset(dt) - self.base


class Property:
    def __init__(self, name, raw='', params=None):
        self.name = name.lower()
        self.params = params or {}
        self.raw = raw
        self.value = unescape(raw) if self.name in TEXT else raw
        self.original = self.value
        self.zone_component = None

    def __getattr__(self, name):
        if name.endswith('_param'):
            try:
                return self.params[name[:-6].upper()][0]
            except KeyError:
                pass
        raise AttributeError(name)

    def line(self):
        params = dict(self.params)
        value = self.value
        if value == self.original and self.raw:
            rendered = self.raw
        elif isinstance(value, datetime):
            rendered = value.strftime('%Y%m%dT%H%M%S')
            if value.tzinfo is timezone.utc:
                rendered += 'Z'
            elif value.tzinfo is not None:
                params['TZID'] = [getattr(value.tzinfo, 'key', str(value.tzinfo))]
        elif isinstance(value, date):
            params['VALUE'] = ['DATE']
            rendered = value.strftime('%Y%m%d')
        elif isinstance(value, timedelta):
            seconds = int(value.total_seconds())
            sign = '-' if seconds < 0 else ''
            days, seconds = divmod(abs(seconds), 86400)
            hours, seconds = divmod(seconds, 3600)
            minutes, seconds = divmod(seconds, 60)
            rendered = sign + 'P' + (str(days)+'D' if days else '')
            if hours or minutes or seconds or not days:
                rendered += 'T' + (str(hours)+'H' if hours else '') + (str(minutes)+'M' if minutes else '') + (str(seconds)+'S' if seconds or not(hours or minutes) else '')
        else:
            rendered = escape(value) if self.name in TEXT else str(value)
        def param(value):
            value = str(value).replace('^','^^').replace('\n','^n').replace('"',"^'")
            return '"'+value+'"' if any(c in value for c in ':;,') else value
        suffix = ''.join(';' + key + '=' + ','.join(param(item) for item in values)
                         for key, values in sorted(params.items()))
        return self.name.upper() + suffix + ':' + rendered


class Component:
    def __init__(self, name):
        self.name = name.lower()
        self.contents = {}

    def __getattr__(self, name):
        try:
            return self.contents[name.lower().replace('_', '-')][0]
        except KeyError:
            raise AttributeError(name) from None

    def add(self, value):
        if isinstance(value, str):
            value = Component(value) if value.lower() in {'vevent','vcalendar','vtimezone','standard','daylight','valarm'} else Property(value)
        self.contents.setdefault(value.name, []).append(value)
        return value

    def serialize(self):
        # Match the original helper's content ordering; existing raw properties
        # retain their representation and parameters when copied into replies.
        if self.name == 'vcalendar':
            if 'version' not in self.contents:
                self.add('version').value = '2.0'
            if 'prodid' not in self.contents:
                # Preserve the original helper's on-wire product identifier.
                # This is compatibility data, not a runtime library dependency.
                self.add('prodid').value = '-//PYVOBJECT//NONSGML Version 0.9.9//EN'
            present = {z.tzid.value for z in self.contents.get('vtimezone', [])}
            for event in self.contents.get('vevent', []):
                for props in event.contents.values():
                    for prop in props:
                        component = getattr(prop, 'zone_component', None)
                        if component is None and isinstance(getattr(prop, 'value', None), datetime):
                            value = prop.value
                            if value.tzinfo is not None and value.tzinfo is not timezone.utc:
                                component = generated_zone(value.tzinfo, value.year)
                        if component is not None and component.tzid.value not in present:
                            self.add(component)
                            present.add(component.tzid.value)
        priority = {'version':0,'uid':0,'dtstart':1,'dtend':2,'duration':2}
        lines = ['BEGIN:' + self.name.upper()]
        components = []
        for key in sorted(self.contents, key=lambda key:(priority.get(key, 10), key)):
            for item in self.contents[key]:
                if isinstance(item, Component):
                    components.append(item)
                else:
                    lines.append(item.line())
        result = '\r\n'.join(fold(line) for line in lines) + '\r\n'
        for item in sorted(components, key=lambda c:(c.name != 'vtimezone', c.name)):
            result += item.serialize()
        return result + 'END:' + self.name.upper() + '\r\n'


def newFromBehavior(name):
    return Component(name)


def readOne(stream, ignoreUnreadable=False):
    data = stream.read() if hasattr(stream, 'read') else stream
    if isinstance(data, bytes):
        data = data.decode('utf-8-sig')
    lines = re.sub(r'\r?\n[ \t]', '', data.lstrip('\ufeff')).splitlines()
    root, stack = None, []
    for line in lines:
        if not line:
            continue
        parts = split_quoted(line, ':')
        if len(parts) < 2:
            if ignoreUnreadable:
                continue
            raise ValueError('Invalid iCalendar content line')
        header, value = parts[0], ':'.join(parts[1:])
        fields = split_quoted(header, ';')
        name = fields.pop(0).lower()
        if name == 'begin':
            component = Component(value)
            if stack:
                stack[-1].add(component)
            elif root is None:
                root = component
            stack.append(component)
        elif name == 'end':
            if not stack or stack[-1].name != value.lower():
                raise ValueError('Mismatched iCalendar END')
            stack.pop()
            if not stack:
                break
        elif stack:
            params = {}
            for field in fields:
                key, separator, values = field.partition('=')
                if not separator:
                    raise ValueError('Invalid iCalendar parameter')
                params[key.upper()] = [re.sub(r'\^([nN^\'])',lambda m:'\n' if m[1].lower()=='n' else '"' if m[1]=="'" else '^',part.strip('"'))
                                       for part in split_quoted(values, ',')]
            stack[-1].add(Property(name, value, params))
    if root is None or stack:
        raise ValueError('Incomplete iCalendar component')
    zones = {}
    for component in root.contents.get('vtimezone', []):
        zones[component.tzid.value] = component
    def decode(component):
        for values in component.contents.values():
            for item in values:
                if isinstance(item, Component):
                    # VTIMEZONE DTSTART is always a local transition time.
                    if item.name != 'vtimezone':
                        decode(item)
                elif item.name in DATES and item.raw:
                    value = plain_date(item.raw)
                    tzid = item.params.get('TZID', [None])[0]
                    if tzid and isinstance(value, datetime) and value.tzinfo is None:
                        item.zone_component = zones.get(tzid)
                        try:
                            zone = named_zone(tzid)
                        except ValueError:
                            if item.zone_component is None:
                                raise
                            zone = EmbeddedZone(item.zone_component)
                        value = value.replace(tzinfo=zone)
                        # ZoneInfo chooses the pre-gap offset; vobject/dateutil
                        # used the post-gap offset for nonexistent local times.
                        if isinstance(zone, ZoneInfo):
                            roundtrip = value.astimezone(timezone.utc).astimezone(zone)
                            if roundtrip.replace(tzinfo=None) > value.replace(tzinfo=None):
                                value = value.replace(fold=1)
                    item.value = value
                    item.original = value
                elif item.name == 'duration':
                    match = re.fullmatch(r'([+-])?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?', item.raw)
                    if not match or not any(match.groups()[1:]):
                        raise ValueError('Invalid iCalendar duration')
                    sign, weeks, days, hours, minutes, seconds = match.groups()
                    item.value = timedelta(weeks=int(weeks or 0),days=int(days or 0),hours=int(hours or 0),minutes=int(minutes or 0),seconds=int(seconds or 0))
                    if sign == '-':
                        item.value = -item.value
                    item.original = item.value
    decode(root)
    return root


def generated_zone(zone, year):
    """Embed transitions around this reply's date, including fixed-offset zones.

    Replies in the existing helper do not expand recurrence rules. Explicit
    transition dates cover this event and two surrounding years on either side.
    """
    result = Component('vtimezone')
    result.add('tzid').value = getattr(zone, 'key', str(zone))
    begin = datetime(max(1, year - 2), 1, 1, tzinfo=timezone.utc)
    end = datetime(min(9999, year + 3), 1, 1, tzinfo=timezone.utc)
    previous = begin
    previous_offset = begin.astimezone(zone).utcoffset()
    groups = {}
    while previous < end:
        current = min(previous + timedelta(days=1), end)
        current_offset = current.astimezone(zone).utcoffset()
        if current_offset != previous_offset:
            low, high = previous, current
            while high - low > timedelta(seconds=1):
                middle = low + timedelta(seconds=int((high-low).total_seconds()) // 2)
                if middle.astimezone(zone).utcoffset() == previous_offset:
                    low = middle
                else:
                    high = middle
            local = high.astimezone(zone)
            key = ('daylight' if local.dst() else 'standard', previous_offset, current_offset, local.tzname())
            groups.setdefault(key, []).append((high + previous_offset).replace(tzinfo=None))
        previous, previous_offset = current, current_offset
    if not groups:
        local = begin.astimezone(zone)
        groups[('standard', local.utcoffset(), local.utcoffset(), local.tzname())] = [begin.replace(tzinfo=None)]
    def render_offset(value):
        seconds = int(value.total_seconds())
        hours, seconds_left = divmod(abs(seconds), 3600)
        minutes, seconds_left = divmod(seconds_left, 60)
        return ('-' if seconds < 0 else '+') + f'{hours:02}{minutes:02}' + (f'{seconds_left:02}' if seconds_left else '')
    for (kind, before, after, name), dates in groups.items():
        item = result.add(kind)
        item.add('dtstart').value = dates[0]
        item.add('tzoffsetfrom').value = render_offset(before)
        item.add('tzoffsetto').value = render_offset(after)
        if name:
            item.add('tzname').value = name
        if len(dates) > 1:
            item.add('rdate').value = ','.join(value.strftime('%Y%m%dT%H%M%S') for value in dates[1:])
    return result
