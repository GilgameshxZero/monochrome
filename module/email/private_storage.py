"""Fail-closed checks for token and browser temporary storage."""
import base64
import os
from pathlib import Path
import subprocess


def windows_acl(path, protect=False):
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
