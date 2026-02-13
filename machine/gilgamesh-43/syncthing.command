#!/usr/bin/env bash
tmux new-session -d -s syncthing;
tmux send -t syncthing:0 "while true; do /Applications/syncthing; sleep 4; done" C-m;
