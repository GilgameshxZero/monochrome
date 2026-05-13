#!/bin/bash
# if pgrep -x evtest > /dev/null; then
if ! lsmod | grep -q hid_multitouch; then
	# sudo pkill evtest
	sudo modprobe hid_multitouch
else
	# sudo evtest --grab /dev/input/event19 > /dev/null & disown
	sudo modprobe -r hid_multitouch
	xdotool mousemove 0 0
	xdotool mousemove_relative 9999 100
fi
