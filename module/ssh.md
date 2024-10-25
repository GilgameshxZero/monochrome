# `ssh`

ssh/sshd are used for inter-device communication. All clients are preferred to use the `gilgamesh-16` keys in `monochrome/config/ssh`.

## Permissions

### Linux

Ensure that the private key has the correct permissions `chmod 600 ~/.id_rsa`.

## Client `ssh`

On the client, these options should typically be set for persistent SSH tunnels:

```
ExitOnForwardFailure=yes
ServerAliveInterval=30
```

One can set these per-connection with `-o`.

## Server `sshd`

### Windows

OpenSSH Server must be installed as an Optional Feature. Configurations can be managed under `%ProgramData%\ssh\sshd_config` and the service can be managed under `services.msc`. Mirror the configuration for Linux.

Authorized keys should be set in `%ProgramData%\ssh\administrators_authorized_keys` instead of `~\.ssh\authorized_keys` for Administrator accounts. Read <https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement#administrative-user> for a detailed explanation of how, but quickly, via an admin Powershell:

```powershell
$authorizedKey = Get-Content -Path $env:USERPROFILE\.ssh\id_rsa.pub
Add-Content -Force -Path $env:ProgramData\ssh\administrators_authorized_keys -Value "$authorizedKey";icacls.exe "$env:ProgramData\ssh\administrators_authorized_keys" /inheritance:r /grant "Administrators:F" /grant "SYSTEM:F"
```

This may require a restart of the service, and may require a re-login, but will likely not.

#### References

1. <https://superuser.com/questions/1342411/setting-ssh-keys-on-windows-10-openssh-server>.

### Linux

On the server, sshd must be configured specially to disconnect broken clients, and to allow eternal connects when port forwarding.

`/etc/ssh/sshd_config`:

```
PasswordAuthentication no
ChallengeResponseAuthentication no
KbdInteractiveAuthentication no

# Enables port forwarding.
GatewayPorts yes

# Keeps client alive for 180 seconds, sending a packet every 60 seconds.
ClientAliveInterval 60
# This is the default, so no need to set explicitly.
# ClientAliveCountMax 3

# Enables X11 forwarding, only on Linux-based hosts.
X11Forwarding yes
X11UseForwarding yes
```

`sudo systemctl restart sshd` to restart and apply configuration.

## Targets and aliases

Provisioned `gilgamesh-*` client and server machines may choose to tunnel to `gilgamesh.cc` to enable SSH access. These targets, in addition to more ad-hoc compute clusters, should be aliased in `~/.ssh/config`, otherwise available in `monochrome/config/ssh`.

## Tunnel infrastructure

For machine `gilgamesh-X`, ports on `gilgamesh.cc` are allocated for tunneling as follows:

Port|Usage
-|-
8080|qBittorrent on `gilgamesh-29`
8384|Syncthing on `gilgamesh-29`
8888|jupyterlab on `gilgamesh-29`
60000+X|SSH
61000+X (TCP and UDP)|RDP or VNC or ProxMox

Utilize the tunneling scripts in `monochrome/config/ssh` to establish persistent tunnels from each machine. Use `lsof -i :X` to check for existing processes connected at port X.

### Windows

Shortcuts to the scripts can be placed directly in `shell:startup`.

### Linux

`systemctl` is preferred. The script should be called from a user service file located in `/etc/systemd/system`. See `monochrome/config/ssh` for a sample.

## X11 forwarding

All `gilgamesh-*` machines are enabled for X11 forwarding. The client must run an X server, such as Xming, and set the `DISPLAY` environment variable before connecting to the server. Consider connecting with `-Y` if `-X` does not work.

A quick check can be run with `xclock`. Vulkan graphics, software and hardware, can be enabled on the host and tested with `vkcube --gpu_number X` (with default `X=0`). Additional configuration should be managed via the `vnc` module.

### Windows

```batch
SET DISPLAY=localhost:0.0
```

### MacOS

```bash
export DISPLAY=:0
```

## Agent forwarding in VSCode, Windows client

`export SSH_AUTH_SOCK=$(ls -t /tmp/ssh-**/* | head -1)` may need be to run to correctly forward SSH agent. You may test with `ssh -T git@github.com`. See <https://github.com/microsoft/vscode/issues/168202#issuecomment-2016912013> for more information, or <https://github.com/microsoft/vscode/issues/168202#issuecomment-2016916053>.

On Windows, SSH agent forwarding is not enabled by default. The OpenSSH that ships with Windows does not perform this correctly, though Git SSH does, with some additional overhead (`start-ssh-agent` needs to be run before each `ssh`). To bypass this, install the beta version of OpenSSH for windows, reconfigure all paths to use that version, and set up the authentication agent to launch via startup from `Services`. In addition, make sure the keys are added via `ssh-add`.

The beta version of OpenSSH can be acquired here: <https://stackoverflow.com/questions/71399334/ssh-fails-to-use-private-key-from-ssh-agent-communication-with-agent-failed> at the first answer, or at <https://github.com/PowerShell/Win32-OpenSSH/releases>. You will need to reconfigure path. The MSI may not work and you may need to unzip manually.

Also, consider the following setting in VSCode:

```json
"remote.SSH.useExecServer": false,
```

It helps. I forgot how. It might be a temporary fix though.
