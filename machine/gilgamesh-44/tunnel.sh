#!/usr/bin/env bash
ssh -N -R :60044:127.0.0.1:22 -R :8080:127.0.0.1:8080 -R :8385:127.0.0.1:8384 -o ExitOnForwardFailure=yes -o ServerAliveInterval=60 root@gilgamesh.cc
