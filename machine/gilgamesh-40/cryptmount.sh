#!/usr/bin/env bash
# Helper to unlock and mount all LUKS partitions.
# $1: LUKS password; if empty, then read from stdin.
if [ -z "$1" ]; then
	read -s -p "LUKS Password: " password
	echo ""
else
	password=$1
fi
echo -n $password > /tmp/lukskey
cryptsetup --key-file=/tmp/lukskey open /dev/nvme0n1p4 nvme0n1p4
cryptsetup --key-file=/tmp/lukskey open /dev/sda1 sda1
cryptsetup --key-file=/tmp/lukskey open /dev/sdb1 sdb1
rm /tmp/lukskey
mount /dev/mapper/sda1 /mnt/pve/sda1
mount /dev/mapper/sdb1 /mnt/pve/sdb1
