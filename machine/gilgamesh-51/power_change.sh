#!/usr/bin/env bash

# Must be run with sudo. <https://stackoverflow.com/questions/25215604/use-sudo-without-password-inside-a-script>.

# CPU cores online.
echo 1 | sudo tee /sys/devices/system/cpu/cpu0/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu1/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu2/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu3/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu4/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu5/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu6/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu7/online

# Activate boost.
echo 1 | sudo tee /sys/devices/system/cpu/cpufreq/boost
sudo powercap-set intel-rapl -z 0 -c 0 -l 37000000 -s 81872814080
sudo powercap-set intel-rapl -z 0 -c 1 -l 37000000 -s 81872814080
sudo powercap-set intel-rapl-mmio -z 0 -c 0 -l 37000000 -s 81872814080
sudo powercap-set intel-rapl-mmio -z 0 -c 1 -l 37000000 -s 81872814080

# Quiet fans.
sudo modprobe ec_sys write_support=1
echo -n -e "\x88" | sudo dd of="/sys/kernel/debug/ec/ec0/io" bs=1 seek=45 count=1 conv=notrunc

# Conditional based on AC state.
ac_state=`cat /sys/class/power_supply/AC/online`
if [ "$ac_state" = "1" ]; then
	sudo cpupower -c all frequency-set -g performance

	# Sometimes KDE does not set this correctly so we do it here.
	powerprofilesctl set performance

	# Applications.
	syncthing cli config folders ifzzk-usnva paused set false
else
	sudo cpupower -c all frequency-set -g powersave

	# Sometimes KDE does not set this correctly so we do it here.
	powerprofilesctl set power-saver

	# Applications.
	syncthing cli config folders ifzzk-usnva paused set true
fi
