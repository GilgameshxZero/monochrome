#!/bin/bash
# Must be run with sudo. <https://stackoverflow.com/questions/25215604/use-sudo-without-password-inside-a-script>.
echo 1 | sudo tee /sys/devices/system/cpu/cpu0/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu1/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu2/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu3/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu4/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu5/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu6/online
echo 1 | sudo tee /sys/devices/system/cpu/cpu7/online
sudo cpupower -c all frequency-set -g performance
sudo powercap-set intel-rapl -z 0 -c 0 -s 81872814080
sudo powercap-set intel-rapl -z 0 -c 1 -s 81872814080
sudo powercap-set intel-rapl-mmio -z 0 -c 0 -s 81872814080
sudo powercap-set intel-rapl-mmio -z 0 -c 1 -s 81872814080
echo 1 | sudo tee /sys/devices/system/cpu/cpufreq/boost
# Sometimes KDE does not set this correctly so we do it here.
powerprofilesctl set performance

# Fan control.
# sudo modprobe ec_sys write_support=1
# echo -n -e "\x88" | sudo dd of="/sys/kernel/debug/ec/ec0/io" bs=1 seek=45 count=1 conv=notrunc

# Applications.
# lookandfeeltool -a org.manjaro.breath-light.desktop
# sleep 1
# lookandfeeltool -a org.manjaro.breath-light.desktop
# qdbus6 org.kde.kglobalaccel /component/kwin invokeShortcut "Toggle Night Color"
syncthing cli config folders ifzzk-usnva paused set false
