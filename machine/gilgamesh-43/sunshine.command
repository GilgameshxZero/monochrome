#!/usr/bin/env bash
tmux new-session -d -s sunshine;
tmux send -t sunshine:0 "while true; do sunshine; sleep 4; done" C-m;
