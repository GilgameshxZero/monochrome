#!/usr/bin/env bash
tmux new-session -d -s tunnel-gilgamesh_cc;
tmux send -t tunnel-gilgamesh_cc:0 "while true; do ssh -N -R :60043:127.0.0.1:22 -o ExitOnForwardFailure=yes -o ServerAliveInterval=60 guest@gilgamesh.cc; sleep 60; done" C-m;
