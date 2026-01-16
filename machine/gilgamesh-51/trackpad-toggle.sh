#!/bin/bash
if pgrep -x evtest > /dev/null; then
	sudo pkill evtest
else
	sudo evtest --grab /dev/input/event14 > /dev/null & disown
fi
