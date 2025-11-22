#!/bin/bash
# Must be run with sudo. <https://stackoverflow.com/questions/25215604/use-sudo-without-password-inside-a-script>.
sudo cpupower -c all frequency-set -g performance
echo 1 | sudo tee /sys/devices/system/cpu/cpu1/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu2/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu3/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu4/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu5/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu6/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu7/online
syncthing cli config folders ifzzk-usnva paused set false
