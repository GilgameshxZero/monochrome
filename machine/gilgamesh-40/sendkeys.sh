#!/usr/bin/env bash
# Send a series of keys, followed by <ret>, to a VM. Useful for manually unlocking a VM disk upon startup.
# $1: VM ID.
while read -s -n1 i; do
	if [ -z "${i-}" ]; then
		break
	fi
	qm sendkey $1 $i &
done
qm sendkey $1 ret
