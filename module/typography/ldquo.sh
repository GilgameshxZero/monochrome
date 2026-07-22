#!/bin/bash
if [ "$HOSTNAME" = "gilgamesh-51" ]; then
	xdotool key --clearmodifiers control+shift+u 2 0 1 C Return
	xdotool keyup Control_L Control_R Meta_L Meta_R Alt_L Alt_R Super_L Super_R Shift_L Shift_R
else
	( evtest /dev/input/event9 & ) | grep -q "type 1 (EV_KEY), code 56 (KEY_LEFTALT), value 0"
	pkill -9 evtest
	echo key ctrl+shift+u 2 0 1 C enter | dotoolc
fi
