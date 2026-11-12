#!/usr/bin/env python3

"""
This script is meant as a simple way to reply to ical invitations from mutt.
See README for instructions and LICENSE for licensing information.

The local ical_support module uses only Python's standard library.
"""

__author__ = "Martin Sander"
__license__ = "MIT"

import atexit
from datetime import datetime, timezone
from email.message import EmailMessage
import hashlib
import json
import os
from pathlib import Path
import re
import shlex
import shutil
import subprocess
import sys
import tempfile
from getopt import gnu_getopt as getopt

import ical_support as vobject
from command_args import split_command, read_draft_headers, mailbox_address
from private_storage import check_private, protect_private

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', newline='\n')

# Gilgamesh.
usage = """
usage:
%s [OPTIONS] -e your@email.address filename.ics
OPTIONS:
    -i interactive
    -a accept
    -d decline
    -t tentatively accept (accept is default, last one wins)
    -D display only
    -s <sendmail command>
    -g generate ICS reply only
""" % sys.argv[0]


def del_if_present(dic, key):
    if key in dic:
        del dic[key]


def set_accept_state(attendees, state):
    # Normalize RSVP-related parameters for each attendee and set participation status
    if not isinstance(attendees, list):
        return attendees
    for attendee in attendees:
        if not hasattr(attendee, "params"):
            continue
        attendee.params['PARTSTAT'] = [state]
        for i in ["RSVP", "ROLE", "X-NUM-GUESTS", "CUTYPE"]:
            del_if_present(attendee.params, i)
    return attendees


def get_accept_decline():
    # Get user input for accept/decline/tentative/cancel in interactive mode
    while True:
        sys.stdout.write("\nAccept Invitation? [Y]es/[n]o/[t]entative/[c]ancel\n")
        ans = sys.stdin.readline()
        if not ans:
            sys.exit('No invitation response received')
        if ans.lower() == 'y\n' or ans == '\n':
            return 'ACCEPTED'
        if ans.lower() == 'n\n':
            return 'DECLINED'
        if ans.lower() == 't\n':
            return 'TENTATIVE'
        if ans.lower() == 'c\n':
            print("aborted")
            sys.exit(1)


def get_answer(invitation):
    # Build the REPLY VCALENDAR/VEVENT from the invitation
    ans = vobject.newFromBehavior('vcalendar')
    ans.add('method')
    ans.method.value = "REPLY"
    ans.add('vevent')

    # just copy from invitation
    end_prop = "dtend" if "dtend" in invitation.vevent.contents else "duration"
    for i in ["uid", "summary", "dtstart", end_prop, "organizer", "sequence", "recurrence-id"]:
        if i in invitation.vevent.contents:
            ans.vevent.add(invitation.vevent.contents[i][0])

    # new timestamp
    ans.vevent.add('dtstamp')
    # DTSTAMP must be UTC on the wire, including its trailing Z.
    ans.vevent.dtstamp.value = datetime.now(timezone.utc)
    return ans


def openics(invitation_file):
    # Open and parse the ICS invitation file
    with open(invitation_file, encoding='utf-8-sig') as f:
        return vobject.readOne(f, ignoreUnreadable=True)


def format_date(value: datetime) -> str:
    # Format a datetime-like value for display in local timezone when possible
    if isinstance(value, datetime):
        try:
            return value.astimezone(tz=None).strftime("%Y-%m-%d %H:%M %z")
        except Exception:
            return value.strftime("%Y-%m-%d %H:%M %z")
    return value.strftime("%Y-%m-%d %H:%M %z")


def display(ical):
    # Display event details to the user
    summary = ical.vevent.contents['summary'][0].value
    if 'organizer' in ical.vevent.contents:
        if hasattr(ical.vevent.organizer, 'EMAIL_param'):
            sender = ical.vevent.organizer.EMAIL_param
        else:
            sender = ical.vevent.organizer.value.split(':')[1]  # workaround for MS
    else:
        sender = "NO SENDER"
    if 'description' in ical.vevent.contents:
        description = ical.vevent.contents['description'][0].value
    else:
        description = "NO DESCRIPTION"
    attendees = ical.vevent.contents.get("attendee", [])
    locations = ical.vevent.contents.get("location", None)
    sys.stdout.write("From:\t" + sender + "\n")
    sys.stdout.write("Title:\t" + summary + "\n")
    sys.stdout.write("To:\t")
    for attendee in attendees:
        if hasattr(attendee, 'EMAIL_param') and hasattr(attendee, 'CN_param'):
            sys.stdout.write(attendee.CN_param + " <" + attendee.EMAIL_param + ">, ")
        else:
            try:
                sys.stdout.write(attendee.CN_param + " <" + attendee.value.split(':')[1] + ">, ")  # workaround for MS
            except Exception:
                # workaround for 'mailto:' in email
                sys.stdout.write(attendee.value.split(':')[1] + " <" + attendee.value.split(':')[1] + ">, ")
    sys.stdout.write("\n")
    if hasattr(ical.vevent, 'dtstart'):
        print(f"Start:\t{format_date(ical.vevent.dtstart.value)}")
    if hasattr(ical.vevent, 'dtend'):
        print(f"End:\t{format_date(ical.vevent.dtend.value)}")
    elif hasattr(ical.vevent, 'duration') and hasattr(ical.vevent, 'dtstart'):
        print(f"End:\t{format_date(ical.vevent.dtstart.value + ical.vevent.duration.value)}")
    if locations:
        sys.stdout.write("Location:\t")
        for location in locations:
            if location.value:
                sys.stdout.write(location.value + ", ")
        sys.stdout.write("\n")
    sys.stdout.write("\n")
    sys.stdout.write(description + "\n")


def sendmail_command():
    # Detect the configured sendmail command from mutt/neomutt configuration
    for mutt in ("mutt", "neomutt"):
        try:
            output = subprocess.check_output([mutt, "-Q", "sendmail"], stderr=subprocess.STDOUT)
            out = output.strip().decode()
        except (subprocess.CalledProcessError, FileNotFoundError):
            continue

        match = re.search(r'sendmail\s*=\s*"([^"]+)"', out)
        if match:
            return split_command(match.group(1))

        match = re.search(r'sendmail\s*=\s*(\S.*)$', out)
        if match:
            return split_command(match.group(1))

        if out:
            out = out.strip('"')
            return split_command(out)

    return None


def organizer(ical):
    # Extract organizer email address from event
    if 'organizer' in ical.vevent.contents:
        if hasattr(ical.vevent.organizer, 'EMAIL_param'):
            return ical.vevent.organizer.EMAIL_param
        return ical.vevent.organizer.value.split(':')[1]  # workaround for MS
    raise Exception("no organizer in event")


def rc_quote(value):
    """Quote data for one NeoMutt config token, without executing substitutions."""
    value = str(value)
    if any(ord(char) < 32 or ord(char) == 127 for char in value):
        raise ValueError('Control character in calendar command data')
    return '"' + value.replace('\\', '\\\\').replace('"', '\\"').replace(
        '$', '\\$').replace('`', '\\`').replace('^', '\\136') + '"'


def command_path(path):
    # Relative forward-slash paths avoid treating a drive colon/backslash as
    # editor control input while the macro is entering an attachment filename.
    try:
        return Path(os.path.relpath(path, Path.cwd())).as_posix()
    except ValueError:
        return Path(path).as_posix()


def source_keys(arguments):
    """Invoke this helper through NeoMutt's ordinary source-pipe command."""
    command = ['python3', '-X', 'utf8', Path(__file__).resolve().as_posix(), *(command_path(arg) if isinstance(arg, Path) else str(arg) for arg in arguments)]
    shell_command = subprocess.list2cmdline(command) if os.name == 'nt' else shlex.join(command)
    return '<enter-command>source ' + rc_quote(shell_command + '|') + '<enter>'


def literal_keys(value):
    # A quote-char before each scalar prevents address text from becoming a
    # macro operation. Config quoting separately protects $, backticks and ^.
    if any(ord(char) < 32 or ord(char) == 127 for char in value):
        raise ValueError('Control character in organizer mailbox')
    return ''.join('<quote-char>' + char for char in value)


def prepare_reply_commands(reply_key):
    """Create private unique staging and emit only stock compose operations."""
    if reply_key not in {'r', 'R'}:
        raise ValueError('Unknown calendar reply key')
    base = Path(tempfile.gettempdir()) / 'neomutt-ical'
    try:
        base.mkdir(mode=0o700)
    except FileExistsError:
        check_private(base, directory=True)
    else:
        protect_private(base)
    # Completed/discarded replies leave at most an empty directory. Never
    # remove an active reply, or any file, during this bounded cleanup.
    for child in base.iterdir():
        if child.is_dir() and not child.is_symlink():
            try:
                child.rmdir()
            except OSError:
                pass
    root = Path(tempfile.mkdtemp(prefix='reply-', dir=base))
    state = root / 'state.json'
    state.write_text(json.dumps({'kind': 'calendar_reply'}), encoding='utf-8')
    invitation, reply = root / 'invitation.ics', root / 'reply.ics'
    if any('<' in str(path) or '>' in str(path) for path in (root, Path(__file__))):
        shutil.rmtree(root)
        raise ValueError('Calendar staging path contains a reserved macro character')
    quote = (lambda arg: subprocess.list2cmdline([command_path(arg) if isinstance(arg, Path) else str(arg)])) if os.name == 'nt' else (lambda arg: shlex.quote(str(arg)))
    generate = 'python3 -X utf8 ' + quote(Path(__file__).resolve()) + ' -i -g ' + quote(reply) + ' ' + quote(invitation)
    keys = ('<pipe-entry>iconv -c --to-code=UTF-8 > ' + quote(invitation) + '<enter>' +
            ('<reply>' if reply_key == 'r' else '<group-reply>') +
            '<new-mime>' + command_path(reply) + '<enter>text/calendar<enter>' +
            '<shell-escape>' + generate + '<enter>' +
            '<last-entry><edit-type><kill-line>text/calendar; method=REPLY<enter>' +
            '<update-encoding>' + source_keys(['--compose-reply', reply]))
    print('push ' + rc_quote(keys))


def reply_workspace(filename):
    """Accept only the private workspace created for this reply."""
    reply = Path(filename).resolve()
    root = reply.parent
    base = Path(tempfile.gettempdir()).resolve() / 'neomutt-ical'
    if reply.name != 'reply.ics' or root.parent != base or not root.name.startswith('reply-'):
        raise ValueError('Unknown calendar reply workspace')
    check_private(base, directory=True)
    state = json.loads((root / 'state.json').read_text(encoding='utf-8'))
    if state.get('kind') != 'calendar_reply':
        raise ValueError('Unknown calendar reply workspace')
    return root, reply, state


def validated_reply(filename):
    calendar = openics(str(filename))
    if str(calendar.method.value).upper() != 'REPLY':
        raise ValueError('A generated calendar REPLY is required')
    event = calendar.vevent
    attendees = event.contents.get('attendee', [])
    if len(attendees) != 1 or not str(event.uid.value):
        raise ValueError('A single-attendee calendar response is required')
    if attendees[0].params.get('PARTSTAT', [''])[0] not in {'ACCEPTED', 'DECLINED', 'TENTATIVE'}:
        raise ValueError('A calendar participation response is required')
    return mailbox_address(organizer(calendar))


def compose_reply_commands(filename):
    """Snapshot a fresh compose using stock write-fcc, preserving all settings.

    This snapshot only validates/counts MIME parts; it does not change From or
    determine attendee identity. Nothing is submitted or put in the sent archive.
    """
    root, reply, state = reply_workspace(filename)
    if not reply.is_file() or not reply.stat().st_size:
        shutil.rmtree(root)
        return
    recipient = validated_reply(reply)
    state['reply_sha256'] = hashlib.sha256(reply.read_bytes()).hexdigest()
    (root / 'state.json').write_text(json.dumps(state), encoding='utf-8')
    snapshot = root / 'draft'
    keys = ('<edit-to><kill-line>' + literal_keys(recipient) + '<enter>' +
            '<edit-cc><kill-line><enter><edit-bcc><kill-line><enter>' +
            '<write-fcc><kill-line>' + command_path(snapshot) + '<enter>' +
            source_keys(['--finish-compose-reply', reply]))
    print('set my_ical_reply_saved_create=$confirm_create')
    print('unset confirm_create')
    print('push ' + rc_quote(keys))


def finish_compose_reply_commands(filename):
    """Keep the verified generated MIME part using ordinary stock detach keys."""
    # mailbox and email.parser are only needed here and cost a noticeable
    # fraction of interpreter startup, so they stay local to this command.
    import mailbox
    from email import policy
    from email.parser import BytesParser
    # Restore even when serialization/generation failed; do not delete a body
    # unless the exact generated calendar is found once in the actual snapshot.
    print('set confirm_create=$my_ical_reply_saved_create; unset my_ical_reply_saved_create')
    root, reply, state = reply_workspace(filename)
    snapshot = root / 'draft'
    try:
        data = reply.read_bytes()
        if hashlib.sha256(data).hexdigest() != state.get('reply_sha256'):
            raise ValueError('Calendar response changed during composition')
        validated_reply(reply)
        factory = lambda file: BytesParser(policy=policy.default).parse(file)
        if snapshot.is_dir():
            box = mailbox.Maildir(snapshot, factory=factory, create=False) if (snapshot/'cur').is_dir() else mailbox.MH(snapshot, factory=factory, create=False)
        else:
            with snapshot.open('rb') as stream:
                is_mmdf = stream.read(5) == b'\1\1\1\1\n'
            box = (mailbox.MMDF if is_mmdf else mailbox.mbox)(snapshot, factory=factory, create=False)
        try:
            messages = list(box.values())
        finally:
            box.close()
        if len(messages) != 1:
            raise ValueError('Expected one private compose snapshot')
        message = messages[0]
        parts = list(message.iter_parts()) if message.is_multipart() else [message]
        normalize = lambda payload: payload.replace(b'\r\n', b'\n').rstrip(b'\n')
        matches = [index for index, part in enumerate(parts)
                   if part.get_content_type() == 'text/calendar' and part.get_param('method') == 'REPLY'
                   and normalize(part.get_payload(decode=True) or b'') == normalize(data)]
        if len(matches) != 1 or len(parts) > 1000:
            raise ValueError('Generated calendar part is missing or ambiguous')
        selected = matches[0]
        keys = ('<first-entry><detach-file>' * selected +
                '<last-entry><detach-file>' * (len(parts) - selected - 1) + '<first-entry>')
        if parts[selected].get_content_disposition() != 'inline':
            keys += '<toggle-disposition>'
        keys += ('<update-encoding><enter-command>set compose_confirm_detach_first='
                 '$my_ical_reply_saved_detach; unset my_ical_reply_saved_detach<enter>')
        print('set my_ical_reply_saved_detach=$compose_confirm_detach_first')
        print('unset compose_confirm_detach_first')
        print('push ' + rc_quote(keys))
    finally:
        if snapshot.is_dir():
            shutil.rmtree(snapshot)
        else:
            snapshot.unlink(missing_ok=True)
        (root/'invitation.ics').unlink(missing_ok=True)
        (root/'state.json').unlink(missing_ok=True)
        # reply.ics remains owned by NeoMutt until send/discard. The now-empty
        # directory is removed by the next prepare, without a background worker.


if __name__ == "__main__":
    if len(sys.argv) == 3 and sys.argv[1] == '--prepare-reply':
        prepare_reply_commands(sys.argv[2])
        sys.exit(0)
    if len(sys.argv) == 3 and sys.argv[1] == '--finish-compose-reply':
        finish_compose_reply_commands(sys.argv[2])
        sys.exit(0)
    if len(sys.argv) == 3 and sys.argv[1] == '--compose-reply':
        compose_reply_commands(sys.argv[2])
        sys.exit(0)
    if len(sys.argv) == 3 and sys.argv[1] == '--draft-headers':
        headers = read_draft_headers(sys.argv[2])
        for name in ('Subject', 'To', 'From'):
            sys.stdout.buffer.write(headers[name].encode('utf-8') + b'\0')
        sys.exit(0)
    if len(sys.argv) == 3 and sys.argv[1] == '--mailbox-address':
        print(mailbox_address(sys.argv[2]))
        sys.exit(0)
    # Parse options and drive the interactive or non-interactive reply flow
    sendmail_resolver = sendmail_command
    # Gilgamesh: default with NEOMUTT_FROM.
    email_address = os.environ.get("NEOMUTT_FROM")
    # email_address = None
    accept_decline = 'ACCEPTED'
    generate_reply_to = None
    # Gilgamesh.
    opts, args = getopt(sys.argv[1:], "s:e:g:aidtD")
    # A cancelled/failed generation must not leave an empty new-mime placeholder.
    def remove_empty_reply():
        for option, value in opts:
            if option == '-g':
                path = Path(value)
                if path.is_file() and path.stat().st_size == 0:
                    path.unlink()
    atexit.register(remove_empty_reply)

    if len(args) < 1:
        sys.stderr.write(usage)
        sys.exit(1)

    invitation = openics(args[0])
    display(invitation)

    for opt, arg in opts:
        if opt == '-D':
            sys.exit(0)
        if opt == '-s':
            # If -s is provided, override sendmail with a lambda that returns the command
            sendmail_resolver = (lambda a=arg: split_command(a))
        if opt == '-e':
            email_address = arg
        if opt == '-i':
            print("\nAs:", email_address, end=".")
            accept_decline = get_accept_decline()
        if opt == '-a':
            accept_decline = 'ACCEPTED'
        if opt == '-d':
            accept_decline = 'DECLINED'
        if opt == '-t':
            accept_decline = 'TENTATIVE'
        # Gilgamesh.
        if opt == '-g':
            generate_reply_to = arg

    if not email_address:
        sys.stderr.write("Error: Your email address must be provided with -e.\n")
        sys.stderr.write(usage)
        sys.exit(1)

    ans = get_answer(invitation)

    attendees = invitation.vevent.contents.get("attendee", [])
    set_accept_state(attendees, accept_decline)

    # Gilgamesh: Always add email to attendee list,
    # regardless if invited.
    attendee = ans.vevent.add('attendee')
    attendee.value = f'mailto:{email_address}'
    attendee.params['CN'] = [email_address]
    attendee.params['PARTSTAT'] = [accept_decline]

    summary = ans.vevent.contents['summary'][0].value
    accept_decline = accept_decline.capitalize()
    subject = f"{accept_decline}: {summary}"
    to = organizer(ans)

    ans.vevent.add('priority')
    ans.vevent.priority.value = '5'

    message = EmailMessage()
    message['From'] = email_address
    message['To'] = to
    message['Subject'] = subject
    if accept_decline.lower() == "accepted":
        mailtext = f"Thank you for the invitation. I, {email_address}, will be attending."

        ans.vevent.add('status')
        ans.vevent.status.value = 'CONFIRMED'
        ans.vevent.add('x-microsoft-cdo-busystatus')
        ans.vevent.x_microsoft_cdo_busystatus.value = 'BUSY'
    elif accept_decline.lower() == "tentative":
        mailtext = f"Thank you for the invitation. I, {email_address}, am tentatively available and have marked this time on my calendar."

        ans.vevent.add('status')
        ans.vevent.status.value = 'TENTATIVE'
        ans.vevent.add('x-microsoft-cdo-busystatus')
        ans.vevent.x_microsoft_cdo_busystatus.value = 'TENTATIVE'
    elif accept_decline.lower() == "declined":
        mailtext = f"Thank you for the invitation. Unfortunately, I, {email_address}, will not be able to attend."
    else:
        mailtext = "Invalid response type provided."

    # Gilgamesh: If flagged, only generate the ICS REPLY and exit.
    if generate_reply_to:
        with open(generate_reply_to, "w", encoding='utf-8', newline='') as f:
            f.write(ans.serialize())
        sys.exit(0)

    message.set_content(
        ans.serialize(),
        subtype='calendar',
        params={'method': 'REPLY', 'component': 'VEVENT', 'name': 'reply.ics'}
    )

    sendmail_cmd = sendmail_resolver() if callable(sendmail_resolver) else sendmail_resolver
    if not sendmail_cmd:
        raise RuntimeError("Sendmail command is not configured. Aborting.")

    subprocess.run(sendmail_cmd, input=message.as_bytes(), check=True)
