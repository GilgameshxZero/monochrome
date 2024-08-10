while true; do ssh -N -R :60036:127.0.0.1:22 -o ExitOnForwardFailure=yes -o ServerAliveInterval=8 root@gilgamesh.cc; sleep 1; done
