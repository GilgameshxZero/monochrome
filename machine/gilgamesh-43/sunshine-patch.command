#!/usr/bin/env bash
tmux new-session -d -s sunshine-patch;
tmux send -t sunshine-patch:0 "while true; do sunshine; sleep 60; done" C-m;
