#!/usr/bin/env bash
# Defines port forwards between the internal NAT and the real interface.
socat tcp-listen:61041,reuseaddr,fork tcp:10.8.40.41:3389 &
socat udp-listen:61041,reuseaddr,fork udp:10.8.40.41:3389 &
socat tcp-listen:61045,reuseaddr,fork tcp:10.8.40.45:61045 &
socat udp-listen:61045,reuseaddr,fork udp:10.8.40.45:61045
