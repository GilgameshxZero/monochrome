#!/usr/bin/env bash

# Delegates to either `power-ac.sh` or `power-battery.sh.
#
# May be triggered multiple times for a single state, and
# thus must be stateless. May be triggered on a timer.

ac_state=$(cat /sys/class/power_supply/AC/online)
cur_dir=$(dirname $0)
if [ "$ac_state" = "1" ]; then
	$cur_dir/power-ac.sh
else
	$cur_dir/power-battery.sh
fi
