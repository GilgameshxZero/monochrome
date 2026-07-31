#!/usr/bin/env bash
# Helper script which uses `cryptmount.sh` and `sendkeys.sh` to mount all drives, start all VMs, and unlock relevant ones.

echo 550000 | tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_min_freq
echo conservative | tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor

# VM-specific keys are stored in plaintext on `sdb1`, after it is unlocked.
./cryptmount.sh
swapon /mnt/pve/sda1/swapfile

# Start all VMs.
qm start 141
qm start 142
qm start 143
qm start 147
qm start 148
qm start 149

# VMs which need unlock are specified here.
sleep 128
./sendkeys.sh 142 $(cat /mnt/pve/sdb1/import/sendkeys.142.txt.raw)
./sendkeys.sh 143 $(cat /mnt/pve/sdb1/import/sendkeys.143.txt.raw)
./sendkeys.sh 147 $(cat /mnt/pve/sdb1/import/sendkeys.147.txt.raw)
