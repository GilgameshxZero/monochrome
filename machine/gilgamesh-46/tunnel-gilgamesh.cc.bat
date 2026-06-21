@ECHO OFF
@REM This is meant to be linked in `Task Scheduler` "on log on".
gx hide "gx repeat ssh -N -R :60046:127.0.0.1:22 -R :61046:127.0.0.1:3389 -o ExitOnForwardFailure=yes -o ServerAliveInterval=8 guest@gilgamesh.cc"
