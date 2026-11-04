"""Parse external-command arguments without running a shell."""
import os
import shlex


def split_command(command):
    if os.name != 'nt':
        return shlex.split(command)
    import ctypes
    from ctypes import wintypes
    parse = ctypes.WinDLL('shell32', use_last_error=True).CommandLineToArgvW
    parse.argtypes = [wintypes.LPCWSTR, ctypes.POINTER(ctypes.c_int)]
    parse.restype = ctypes.POINTER(wintypes.LPWSTR)
    free = ctypes.WinDLL('kernel32', use_last_error=True).LocalFree
    free.argtypes = [ctypes.c_void_p]
    free.restype = ctypes.c_void_p
    count = ctypes.c_int()
    values = parse(command, ctypes.byref(count))
    if not values:
        raise ctypes.WinError(ctypes.get_last_error())
    try:
        return [values[index] for index in range(count.value)]
    finally:
        free(values)


def mailbox_address(value):
    """Extract one envelope mailbox, rejecting ambiguous/injected identities."""
    import email.utils
    if not value or '\r' in value or '\n' in value:
        raise ValueError('A single sender mailbox is required')
    addresses = email.utils.getaddresses([value])
    if len(addresses) != 1 or '@' not in addresses[0][1]:
        raise ValueError('A single sender mailbox is required')
    return addresses[0][1]


def read_draft_headers(filename):
    """Read the latest write-fcc message, including its actual edited From."""
    import email.parser
    import email.policy
    import email.utils
    import mailbox
    from pathlib import Path
    parser = email.parser.BytesHeaderParser(policy=email.policy.default)
    message = None
    box = mailbox.mbox(filename, factory=parser.parse, create=False)
    try:
        for message in box:
            pass
    finally:
        box.close()
    if message is None:
        message = parser.parsebytes(Path(filename).read_bytes())
    return {'Subject': str(message.get('Subject') or ''),
            'To': '\n'.join(address for _, address in email.utils.getaddresses(message.get_all('To', []))),
            'From': mailbox_address(str(message.get('From') or ''))}
