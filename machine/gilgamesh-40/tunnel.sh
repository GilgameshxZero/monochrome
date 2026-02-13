#!/usr/bin/env bash
ssh -N -R :60040:127.0.0.1:22 -R :61040:127.0.0.1:8006 -o ExitOnForwardFailure=yes -o ServerAliveInterval=60 guest@gilgamesh.cc
