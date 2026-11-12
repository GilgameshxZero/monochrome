"""Fail-closed checks for token and browser temporary storage."""
import base64
import ctypes
import os
from pathlib import Path
import subprocess

ALLOWED_SIDS = ('S-1-5-18', 'S-1-5-32-544')  # SYSTEM, Administrators
ACCESS_ALLOWED_ACE_TYPE = 0
CONTAINER_INHERIT_ACE = 0x2
OBJECT_INHERIT_ACE = 0x1
GENERIC_ALL = 0x10000000
DACL_SECURITY_INFORMATION = 0x4
OWNER_SECURITY_INFORMATION = 0x1
PROTECTED_DACL_SECURITY_INFORMATION = 0x80000000
TOKEN_QUERY = 0x8
SE_FILE_OBJECT = 1


def _powershell_acl(path, protect=False):
    # Encode the path as data, never as PowerShell syntax. Use Windows PowerShell
    # from its system location, not a namesake executable found on PATH.
    encoded_path = base64.b64encode(str(Path(path).resolve()).encode('utf-8')).decode('ascii')
    script = """
$ErrorActionPreference = 'Stop'
$p = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('PATH_DATA'))
$item = Get-Item -LiteralPath $p -Force
if ($item.Attributes -band [IO.FileAttributes]::ReparsePoint) { throw 'Reparse point refused' }
$sid = [Security.Principal.WindowsIdentity]::GetCurrent().User
$acl = Get-Acl -LiteralPath $p
$allowed = @($sid.Value, 'S-1-5-18', 'S-1-5-32-544')
if ($acl.GetOwner([Security.Principal.SecurityIdentifier]).Value -notin $allowed) {
  throw 'Unexpected storage owner'
}
PROTECT_CODE
foreach ($rule in $acl.GetAccessRules($true, $true, [Security.Principal.SecurityIdentifier])) {
  if ($rule.AccessControlType -eq 'Allow' -and
      $rule.IdentityReference.Value -notin $allowed) { throw 'Storage ACL permits another identity' }
}
if ($acl.GetOwner([Security.Principal.SecurityIdentifier]).Value -notin $allowed) {
  throw 'Unexpected storage owner'
}
""".replace('PATH_DATA', encoded_path)
    protection = """
$acl.SetAccessRuleProtection($true, $false)
foreach ($rule in @($acl.Access)) { [void]$acl.RemoveAccessRuleSpecific($rule) }
$inherit = if ($item.PSIsContainer) { 'ContainerInherit, ObjectInherit' } else { 'None' }
foreach ($identity in @($sid.Value, 'S-1-5-18')) {
  $id = [Security.Principal.SecurityIdentifier]::new($identity)
  $rule = [Security.AccessControl.FileSystemAccessRule]::new(
    $id, 'FullControl', $inherit, 'None', 'Allow')
  $acl.AddAccessRule($rule)
}
Set-Acl -LiteralPath $p -AclObject $acl
$acl = Get-Acl -LiteralPath $p
"""
    script = script.replace('PROTECT_CODE', protection if protect else '')
    executable = Path(os.environ.get('SystemRoot', r'C:\Windows')) / 'System32/WindowsPowerShell/v1.0/powershell.exe'
    subprocess.run([str(executable), '-NoLogo', '-NoProfile', '-NonInteractive',
                    '-EncodedCommand', base64.b64encode(script.encode('utf-16le')).decode('ascii')],
                   check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)


def _acl_api():
    """Declare the wide security APIs once and return them with the user SID."""
    import ctypes
    from ctypes import wintypes

    advapi32 = ctypes.WinDLL('advapi32', use_last_error=True)
    kernel32 = ctypes.WinDLL('kernel32', use_last_error=True)
    advapi32.OpenProcessToken.argtypes = [wintypes.HANDLE, wintypes.DWORD,
                                          ctypes.POINTER(wintypes.HANDLE)]
    advapi32.OpenProcessToken.restype = wintypes.BOOL
    advapi32.GetTokenInformation.argtypes = [wintypes.HANDLE, ctypes.c_int,
                                             ctypes.c_void_p, wintypes.DWORD,
                                             ctypes.POINTER(wintypes.DWORD)]
    advapi32.GetTokenInformation.restype = wintypes.BOOL
    advapi32.ConvertSidToStringSidW.argtypes = [ctypes.c_void_p,
                                                ctypes.POINTER(wintypes.LPWSTR)]
    advapi32.ConvertSidToStringSidW.restype = wintypes.BOOL
    advapi32.ConvertStringSidToSidW.argtypes = [wintypes.LPCWSTR,
                                                ctypes.POINTER(ctypes.c_void_p)]
    advapi32.ConvertStringSidToSidW.restype = wintypes.BOOL
    advapi32.GetNamedSecurityInfoW.argtypes = [
        wintypes.LPWSTR, ctypes.c_int, wintypes.DWORD,
        ctypes.POINTER(ctypes.c_void_p), ctypes.c_void_p,
        ctypes.POINTER(ctypes.c_void_p), ctypes.c_void_p,
        ctypes.POINTER(ctypes.c_void_p)]
    advapi32.GetNamedSecurityInfoW.restype = wintypes.DWORD
    advapi32.GetAclInformation.argtypes = [ctypes.c_void_p, ctypes.c_void_p,
                                           wintypes.DWORD, ctypes.c_int]
    advapi32.GetAclInformation.restype = wintypes.BOOL
    advapi32.GetAce.argtypes = [ctypes.c_void_p, wintypes.DWORD,
                                ctypes.POINTER(ctypes.c_void_p)]
    advapi32.GetAce.restype = wintypes.BOOL
    advapi32.InitializeAcl.argtypes = [ctypes.c_void_p, wintypes.DWORD, wintypes.DWORD]
    advapi32.InitializeAcl.restype = wintypes.BOOL
    advapi32.AddAccessAllowedAceEx.argtypes = [ctypes.c_void_p, wintypes.DWORD,
                                               wintypes.DWORD, wintypes.DWORD,
                                               ctypes.c_void_p]
    advapi32.AddAccessAllowedAceEx.restype = wintypes.BOOL
    advapi32.SetNamedSecurityInfoW.argtypes = [
        wintypes.LPWSTR, ctypes.c_int, wintypes.DWORD, ctypes.c_void_p,
        ctypes.c_void_p, ctypes.c_void_p, ctypes.c_void_p]
    advapi32.SetNamedSecurityInfoW.restype = wintypes.DWORD
    kernel32.GetCurrentProcess.restype = wintypes.HANDLE
    kernel32.CloseHandle.argtypes = [wintypes.HANDLE]
    kernel32.CloseHandle.restype = wintypes.BOOL
    kernel32.LocalFree.argtypes = [ctypes.c_void_p]
    kernel32.LocalFree.restype = ctypes.c_void_p

    class SID_AND_ATTRIBUTES(ctypes.Structure):
        _fields_ = [('Sid', ctypes.c_void_p), ('Attributes', wintypes.DWORD)]

    class TOKEN_USER(ctypes.Structure):
        _fields_ = [('User', SID_AND_ATTRIBUTES)]

    token = wintypes.HANDLE()
    if not advapi32.OpenProcessToken(kernel32.GetCurrentProcess(), TOKEN_QUERY,
                                     ctypes.byref(token)):
        raise ctypes.WinError(ctypes.get_last_error())
    try:
        length = wintypes.DWORD()
        advapi32.GetTokenInformation(token, 1, None, 0, ctypes.byref(length))
        buffer = ctypes.create_string_buffer(length.value)
        if not advapi32.GetTokenInformation(token, 1, buffer, length,
                                            ctypes.byref(length)):
            raise ctypes.WinError(ctypes.get_last_error())
        user_sid = ctypes.cast(buffer, ctypes.POINTER(TOKEN_USER)).contents.User.Sid
    finally:
        kernel32.CloseHandle(token)
    # The caller keeps this buffer alive for as long as it uses the SID.
    return advapi32, kernel32, user_sid, buffer


def _sid_string(advapi32, kernel32, sid):
    from ctypes import wintypes
    text = wintypes.LPWSTR()
    if not advapi32.ConvertSidToStringSidW(sid, ctypes.byref(text)):
        raise ctypes.WinError(ctypes.get_last_error())
    try:
        return text.value
    finally:
        kernel32.LocalFree(text)


def _check_ctypes(path):
    import ctypes
    from ctypes import wintypes

    advapi32, kernel32, user_sid, buffer = _acl_api()
    allowed = {_sid_string(advapi32, kernel32, user_sid), *ALLOWED_SIDS}
    owner = ctypes.c_void_p()
    dacl = ctypes.c_void_p()
    descriptor = ctypes.c_void_p()
    result = advapi32.GetNamedSecurityInfoW(
        str(Path(path).resolve()), SE_FILE_OBJECT,
        OWNER_SECURITY_INFORMATION | DACL_SECURITY_INFORMATION, ctypes.byref(owner),
        None, ctypes.byref(dacl), None, ctypes.byref(descriptor))
    if result:
        raise ctypes.WinError(result)
    try:
        if _sid_string(advapi32, kernel32, owner) not in allowed:
            raise ValueError('Unexpected storage owner')
        if not dacl:
            raise ValueError('Storage ACL permits another identity')

        class ACE_HEADER(ctypes.Structure):
            _fields_ = [('AceType', ctypes.c_ubyte), ('AceFlags', ctypes.c_ubyte),
                        ('AceSize', wintypes.WORD)]

        class ACL_SIZE_INFORMATION(ctypes.Structure):
            _fields_ = [('AceCount', wintypes.DWORD),
                        ('AclBytesInUse', wintypes.DWORD),
                        ('AclBytesFree', wintypes.DWORD)]

        size = ACL_SIZE_INFORMATION()
        if not advapi32.GetAclInformation(dacl, ctypes.byref(size),
                                          ctypes.sizeof(size), 2):
            raise ctypes.WinError(ctypes.get_last_error())
        for index in range(size.AceCount):
            ace = ctypes.c_void_p()
            if not advapi32.GetAce(dacl, index, ctypes.byref(ace)):
                raise ctypes.WinError(ctypes.get_last_error())
            header = ctypes.cast(ace, ctypes.POINTER(ACE_HEADER)).contents
            if header.AceType != ACCESS_ALLOWED_ACE_TYPE:
                continue
            sid = ctypes.c_void_p(ace.value + ctypes.sizeof(ACE_HEADER) +
                                  ctypes.sizeof(wintypes.DWORD))
            if _sid_string(advapi32, kernel32, sid) not in allowed:
                raise ValueError('Storage ACL permits another identity')
    finally:
        kernel32.LocalFree(descriptor)


def _protect_ctypes(path, directory):
    import ctypes

    advapi32, kernel32, user_sid, buffer = _acl_api()
    system_sid = ctypes.c_void_p()
    if not advapi32.ConvertStringSidToSidW('S-1-5-18', ctypes.byref(system_sid)):
        raise ctypes.WinError(ctypes.get_last_error())
    acl = ctypes.create_string_buffer(4096)
    if not advapi32.InitializeAcl(acl, len(acl), 2):
        raise ctypes.WinError(ctypes.get_last_error())
    inherit = CONTAINER_INHERIT_ACE | OBJECT_INHERIT_ACE if directory else 0
    try:
        for sid in (user_sid, system_sid):
            if not advapi32.AddAccessAllowedAceEx(acl, 2, inherit, GENERIC_ALL, sid):
                raise ctypes.WinError(ctypes.get_last_error())
        result = advapi32.SetNamedSecurityInfoW(
            str(Path(path).resolve()), SE_FILE_OBJECT,
            DACL_SECURITY_INFORMATION | PROTECTED_DACL_SECURITY_INFORMATION,
            None, None, acl, None)
        if result:
            raise ctypes.WinError(result)
    finally:
        kernel32.LocalFree(system_sid)


def windows_acl(path, protect=False):
    """Check or tighten storage, using the fast native API with a PowerShell fallback."""
    if os.name != 'nt':
        raise RuntimeError('Windows ACLs are only available on Windows')
    try:
        if protect:
            _protect_ctypes(path, Path(path).is_dir())
        _check_ctypes(path)
    except Exception:
        # Any ctypes binding mismatch falls back to the reviewed PowerShell path.
        _powershell_acl(path, protect=protect)


def check_private(path, directory=False):
    path = Path(path)
    if path.is_symlink():
        raise ValueError('Private storage cannot be a symbolic link')
    if os.name == 'nt':
        windows_acl(path)
    else:
        stat = path.stat()
        expected = 0o700 if directory else 0o600
        if stat.st_uid != os.getuid() or stat.st_mode & 0o777 != expected:
            raise ValueError('Private storage must be owned by this user with mode ' + oct(expected))


def protect_private(path):
    if Path(path).is_symlink():
        raise ValueError('Private storage cannot be a symbolic link')
    if os.name == 'nt':
        windows_acl(path, protect=True)
    else:
        os.chmod(path, 0o700 if Path(path).is_dir() else 0o600)
    check_private(path, directory=Path(path).is_dir())
