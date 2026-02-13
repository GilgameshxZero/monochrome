#!/usr/bin/env bash
ssh -N -R :60045:127.0.0.1:22 -R :61045:127.0.0.1:1194 -o ExitOnForwardFailure=yes -o ServerAliveInterval=60 guest@gilgamesh.cc
