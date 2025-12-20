#!/usr/bin/env bash
tmux new-session -d -s ovpn;
tmux send -t ovpn:0 "openvpn --config /home/gilgamesh/main.syncthing/monochrome/machine/$(hostname)/gilgamesh-31.ovpn" C-m;
tmux new-window -t ovpn:1;
tmux send -t ovpn:1 "openvpn --config /home/gilgamesh/main.syncthing/monochrome/machine/$(hostname)/gilgamesh-45.split.ovpn" C-m;
