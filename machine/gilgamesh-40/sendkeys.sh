#!/usr/bin/env bash
# Send a series of keys, followed by <ret>, to a VM. Useful for manually unlocking a VM disk upon startup.
# $1: VM ID.
# $2: Keys to send; if empty, then read from stdin.
if [ -z "$2" ]; then
	read -s -p "Keys: " keys
else
	keys=$2
fi
while read -n1 i; do
	qm sendkey $1 $i
done < <(echo -n "$keys")
qm sendkey $1 ret
