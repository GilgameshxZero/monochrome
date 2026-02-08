#!/usr/bin/env bash
if ping -c 1 gilgamesh.cc &> /dev/null; then
	echo Success reaching gilgamesh.cc.
else
	echo Failed reaching gilgamesh.cc. Resetting...
	ifdown wlp1s0
	ifup wlp1s0
	ip a

	if ping -c 1 gilgamesh.cc &> /dev/null; then
		echo Success reaching gilgamesh.cc.
	else
		echo Failed reaching gilgamesh.cc. Giving up for now.
	fi
fi
