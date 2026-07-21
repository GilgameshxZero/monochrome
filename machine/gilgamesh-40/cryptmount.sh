#!/usr/bin/env bash
# Helper to unlock and mount all LUKS partitions.
cryptsetup luksOpen /dev/nvme0n1p4 nvme0n1p4
cryptsetup luksOpen /dev/sda1 sda1
mount /dev/mapper/sda1 /mnt/pve/sda1
cryptsetup luksOpen /dev/sda2 sda2
mount /dev/mapper/sdb1 /mnt/pve/sdb2
