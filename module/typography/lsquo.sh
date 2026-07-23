#!/bin/bash
# xdotool key --clearmodifiers control+shift+u 2 0 1 8 Return
# xdotool keyup Control_L Control_R Meta_L Meta_R Alt_L Alt_R Super_L Super_R Shift_L Shift_R
for i in /dev/input/event*; do
	( ( evtest "$i" & ) | grep -q "type 1 (EV_KEY), code 56 (KEY_LEFTALT), value 0" && pkill -9 evtest ) &
done
evtest /dev/input/event0
echo key ctrl+shift+u 2 0 1 8 enter | dotoolc
