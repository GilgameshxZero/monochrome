# `server-linux`

A cloud server, either light, running on a small-storage device like DigitalOcean, or heavy, including Syncthing configurations.

Services/scripts should be put into `/etc/systemd/system` and point to `~/main.syncthing/monochrome/machine/gilgamesh-*/`.

## Modules

1. `certbot`
2. `emilia`
3. `nginx`
4. `sshd`
5. `iodine`
6. `ssh`
7. `git`
8. `vpn`

### Optional modules

1. `syncthing`

## Packages

1. `certbot`
2. `make`
3. `clang`
4. `nginx`

## Port allocation

| Port  | Service                    |
| ----- | -------------------------- |
| 25    | `emilia`                   |
| 53    | `iodined`                  |
| 80    | `emilia`                   |
| 443   | `nginx`                    |
| 60xxx | `ssh` for gilgamesh-xxx    |
| 61xxx | RDP/VNC for gilgamesh-xxx  |

## Fixes

On restart, reconfigure `emilia` and `iodine`.

For missing `tmux` sessions, consider getting the PID with `ps -aef | fgrep -i tmux` and sending a signal to recreate sockets: `kill -s USR1 <PID>`. Or, just `pkill -10 tmux`.

Consider flushing `iptables`: <https://www.digitalocean.com/community/tutorials/how-to-list-and-delete-iptables-firewall-rules>.

## Cleanup

* Check disk usage in immediate directory: `du -h -d 1`.
* Check journal usage: `journalctl --disk-usage`.
* Clean `/var/log`: `journalctl --vacuum-size=50M`.
* `rm -rf /usr/share/doc /usr/src`.
* `rm -rf /var/cache/snapd`.

## Runpod

First, clone the repository:

```bash
git clone git@github.com:GilgameshxZero/ft-robustness.git
```

Copy the secrets file from `~/main.syncthing/monochromme/machine/server-linux.password.md` to `/root/ft_robustness/.env`. Then, run the setup script.

```bash
/root/ft-robustness/bin/setup.yang.sh
```
