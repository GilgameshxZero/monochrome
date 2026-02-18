#!/usr/bin/env bash
ssh -N -R :60052:127.0.0.1:22 -o ExitOnForwardFailure=yes -o ServerAliveInterval=60 guest@gilgamesh.cc
