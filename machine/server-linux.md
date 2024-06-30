Configures a cloud server.
Modules:

1. `certbot`
2. `emilia`
3. `nginx`
4. `sshd`
5. `iodine`
6. `ssh`
7. `git`
8. `vpn`

| Port  | Service                    |
| ----- | -------------------------- |
| 25    | `emilia`                   |
| 53    | `iodined`                  |
| 80    | `emilia`                   |
| 443   | `nginx`                    |

On restart, reconfigure `emilia` and `iodine`.

For missing `tmux` sessions, consider getting the PID with `ps -aef | fgrep -i tmux` and sending a signal to recreate sockets: `kill -s USR1 <PID>`. Or, just `pkill -10 tmux`.

Consider flushing `iptables`: <https://www.digitalocean.com/community/tutorials/how-to-list-and-delete-iptables-firewall-rules>.

## Packages

* `certbot`
* `make`
* `clang`
* `nginx`

## Cleanup

* Check disk usage in immediate directory: `du -h -d 1`.
* Check journal usage: `journalctl --disk-usage`.
* Clean `/var/log`: `journalctl --vacuum-size=50M`.
* `rm -rf /usr/share/doc /usr/src`.
* `rm -rf /var/cache/snapd`.

## OpenVPN

OpenVPN server/CA is set up with password for `gilgamesh.cc` Emilia server, following guide at <https://www.digitalocean.com/community/tutorials/how-to-set-up-and-configure-an-openvpn-server-on-ubuntu-20-04#step-10-starting-openvpn>.

This also requires the rules from `iodine` to be set up. More details to come.

## Runpod Ubuntu

```bash
apt install -y software-properties-common;
add-apt-repository universe -y;
add-apt-repository ppa:deadsnakes/ppa -y;
apt install -y python3.11 htop tmux zip unzip openjdk-21-jdk;
ln -s /workspace/.vscode-server /root/.vscode-server;
```

```bash
apt install -y software-properties-common;
add-apt-repository universe -y;
add-apt-repository ppa:deadsnakes/ppa -y;
apt install -y python3.11 htop tmux zip unzip;
apt install -y openjdk-21-jdk xvfb openbox x11vnc dbus-x11 qemu-system;
export DISPLAY=:0;
Xvfb $DISPLAY &;
openbox &;
x11vnc &;
```

```bash
qemu-img create -f qcow2 /workspace/gilgamesh-40.qcow2 512G;

qemu-system-x86_64 \
-cdrom Win11.iso \
-smp cores=16,threads=1,sockets=1 \
-m 32768 \
-cpu EPYC \
-vga virtio \
-serial mon:stdio \
-display none \
-device intel-hda \
-device hda-duplex \
-usb \
-nic user,ipv6=off,model=rtl8139,mac=84:1b:77:c9:03:a6 \
-drive file=/workspace/gilgamesh-40.qcow2,format=qcow2;

-bios /usr/share/ovmf/OVMF.fd \
-cpu host \
-enable-kvm \
```
