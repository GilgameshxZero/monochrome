#!/usr/bin/env bash
tmux new-session -d -s ovpn;
tmux send -t ovpn:0 "sudo /usr/local/opt/openvpn/sbin/openvpn /Users/gilgamesh/main.syncthing/monochrome/machine/$(hostname)/gilgamesh-31.split.ovpn" C-m;
tmux new-window -t ovpn:1;
tmux send -t ovpn:1 "sudo /usr/local/opt/openvpn/sbin/openvpn /Users/gilgamesh/main.syncthing/monochrome/machine/$(hostname)/gilgamesh-45.split.ovpn" C-m;
