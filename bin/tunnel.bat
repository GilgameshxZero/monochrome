@ECHO OFF
:LOOP
ssh -N -R :%1:127.0.0.1:%2 -o ExitOnForwardFailure=yes -o ServerAliveInterval=8 root@gilgamesh.cc
TIMEOUT /NOBREAK /T 1 >NUL
GOTO LOOP
