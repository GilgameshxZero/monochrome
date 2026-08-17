#!/usr/bin/env bash

# May be multi-triggered.

# CPU cores online.
echo 1 | tee /sys/devices/system/cpu/cpu*/online

# Activate boost.
echo 1 | tee /sys/devices/system/cpu/cpu*/cpufreq/boost
powercap-set intel-rapl -z 0 -c 0 -l 37000000 -s 81872814080
powercap-set intel-rapl -z 0 -c 1 -l 37000000 -s 81872814080
powercap-set intel-rapl-mmio -z 0 -c 0 -l 37000000 -s 81872814080
powercap-set intel-rapl-mmio -z 0 -c 1 -l 37000000 -s 81872814080

# Quiet fans.
modprobe ec_sys write_support=1
echo -ne "\x88" | dd of="/sys/kernel/debug/ec/ec0/io" bs=1 seek=45 count=1 conv=notrunc

# Governor.
cpupower -c all frequency-set -g powersave

# Sometimes KDE does not set this correctly so we do it here.
powerprofilesctl set power-saver

# Applications.
# runuser -u gilgamesh -- syncthing cli config folders ifzzk-usnva paused set true

# Theme. Hack.
runuser -l gilgamesh -c "XAUTHORITY=$(ls /run/user/1000/xauth_*) DISPLAY=:0 XDG_CURRENT_DESKTOP=KDE lookandfeeltool -a org.kde.breezedark.desktop"
sleep 0.4
runuser -l gilgamesh -c "XAUTHORITY=$(ls /run/user/1000/xauth_*) DISPLAY=:0 XDG_CURRENT_DESKTOP=KDE lookandfeeltool -a org.kde.breezedark.desktop"
