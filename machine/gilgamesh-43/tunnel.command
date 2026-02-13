#!/usr/bin/env bash
tmux new-session -d -s tunnel;
tmux send -t tunnel:0 "while true; do ssh -N -R :60043:127.0.0.1:22 -o ExitOnForwardFailure=yes -o ServerAliveInterval=60 root@gilgamesh.cc; sleep 4; done" C-m;

