#!/usr/bin/env bash
# umount /etc/pve/priv/notifications.cfg

qm shutdown 141
qm shutdown 142
qm stop 143
qm shutdown 147
qm stop 148
qm shutdown 149

sync
umount /mnt/pve/sdb1
rmdir /mnt/pve/sdb1
umount /mnt/pve/sda1
rmdir /mnt/pve/sda1
cryptsetup close sdb1
cryptsetup close sda1
cryptsetup close nvme0n1p4

