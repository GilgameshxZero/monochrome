#!/bin/bash
# if pgrep -x evtest > /dev/null; then
if ! lsmod | grep -q hid_multitouch; then
	# sudo pkill evtest
	sudo modprobe hid_multitouch
else
	# sudo evtest --grab /dev/input/event19 > /dev/null & disown
	sudo modprobe -r hid_multitouch
fi
