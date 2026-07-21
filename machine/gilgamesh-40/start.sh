#!/usr/bin/env bash
# Helper script which uses `cryptmount.sh` and `sendkeys.sh` to mount all drives, start all VMs, and unlock relevant ones.
# VM-specific keys are stored in plaintext on `sdb1`, after it is unlocked.
./cryptmount.sh

# Start all VMs.
qm start 141
qm start 142
qm start 143
qm start 144
qm start 145
qm start 147
qm start 148
qm start 149

# VMs which need unlock are specified here.
sleep 16
./sendkeys.sh 142 $(cat /mnt/pve/sdb1/import/sendkeys.142.txt.raw)
./sendkeys.sh 143 $(cat /mnt/pve/sdb1/import/sendkeys.143.txt.raw)
./sendkeys.sh 147 $(cat /mnt/pve/sdb1/import/sendkeys.147.txt.raw)
