#!/usr/bin/env bash
# Full tunnel for gilgamesh-58; the gilgamesh-47 split tunnel stays up alongside it.
tmux new-session -d -s ovpn;
tmux send -t ovpn:0 "sudo /usr/local/opt/openvpn/sbin/openvpn /Users/gilgamesh/main.syncthing/monochrome/machine/$(hostname)/gilgamesh-47.split.ovpn" C-m;
tmux new-window -t ovpn:1;
tmux send -t ovpn:1 "sudo /usr/local/opt/openvpn/sbin/openvpn /Users/gilgamesh/main.syncthing/monochrome/machine/$(hostname)/gilgamesh-58.ovpn" C-m;
