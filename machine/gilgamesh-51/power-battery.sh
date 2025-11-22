#!/bin/bash
# Must be run with sudo. <https://stackoverflow.com/questions/25215604/use-sudo-without-password-inside-a-script>.
# e.g. last line in /etc/sudoers: gilgamesh ALL=(ALL:ALL) NOPASSWD: /usr/bin/cpupower
sudo cpupower -c all frequency-set -g powersave
echo 0 | sudo tee /sys/devices/system/cpu/cpu1/online
echo 0 | sudo tee /sys/devices/system/cpu/cpu2/online
echo 0 | sudo tee /sys/devices/system/cpu/cpu3/online
# echo 0 | sudo tee /sys/devices/system/cpu/cpu4/online
echo 0 | sudo tee /sys/devices/system/cpu/cpu5/online
echo 0 | sudo tee /sys/devices/system/cpu/cpu6/online
echo 0 | sudo tee /sys/devices/system/cpu/cpu7/online
sudo pkill -9 pipewire
syncthing cli config folders ifzzk-usnva paused set true
