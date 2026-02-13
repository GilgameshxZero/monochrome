#!/usr/bin/env bash
ssh -N -R :60054:127.0.0.1:22 -R :61054:127.0.0.1:8006 -o ExitOnForwardFailure=yes -o ServerAliveInterval=60 guest@gilgamesh.cc
