#!/bin/bash
# Must be run with sudo. <https://stackoverflow.com/questions/25215604/use-sudo-without-password-inside-a-script>.
# e.g. last line in /etc/sudoers: gilgamesh ALL=(ALL:ALL) NOPASSWD: /usr/bin/cpupower
# echo 0 | sudo tee /sys/devices/system/cpu/cpu0/online
# echo 0 | sudo tee /sys/devices/system/cpu/cpu4/online

echo 0 | sudo tee /sys/devices/system/cpu/cpu1/online
sleep 0.1
echo 0 | sudo tee /sys/devices/system/cpu/cpu2/online
sleep 0.1
echo 0 | sudo tee /sys/devices/system/cpu/cpu3/online
sleep 0.1
echo 0 | sudo tee /sys/devices/system/cpu/cpu5/online
sleep 0.1
echo 0 | sudo tee /sys/devices/system/cpu/cpu6/online
sleep 0.1
echo 0 | sudo tee /sys/devices/system/cpu/cpu7/online
sleep 0.1
echo 0 | sudo tee /sys/devices/system/cpu/cpufreq/boost
sleep 0.1

sudo cpupower -c all frequency-set -g powersave
# Sometimes KDE does not set this correctly so we do it here.
powerprofilesctl set power-saver

# Fan control.
# sudo modprobe ec_sys write_support=1
# echo -n -e "\x88" | sudo dd of="/sys/kernel/debug/ec/ec0/io" bs=1 seek=45 count=1 conv=notrunc

# Applications.
# sudo pkill -9 pipewire
# lookandfeeltool -a org.manjaro.breath-dark.desktop
# sleep 1
# lookandfeeltool -a org.manjaro.breath-dark.desktop
# qdbus6 org.kde.kglobalaccel /component/kwin invokeShortcut "Toggle Night Color"
syncthing cli config folders ifzzk-usnva paused set true
