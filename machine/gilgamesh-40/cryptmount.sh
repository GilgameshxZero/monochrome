#!/usr/bin/env bash
# Helper to unlock and mount all LUKS partitions.
read -s -p "Password: " password
echo -n $password > /tmp/lukskey
cryptsetup --key-file=/tmp/lukskey open /dev/nvme0n1p4 nvme0n1p4
cryptsetup --key-file=/tmp/lukskey open /dev/sda1 sda1
cryptsetup --key-file=/tmp/lukskey open /dev/sdb1 sdb1
rm /tmp/lukskey
mount /dev/mapper/sda1 /mnt/pve/sda1
mount /dev/mapper/sdb1 /mnt/pve/sdb1
