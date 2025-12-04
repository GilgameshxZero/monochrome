#!/usr/bin/env bash
ssh -N -R :60051:127.0.0.1:22 -o ExitOnForwardFailure=yes -o ServerAliveInterval=60 root@gilgamesh.cc
