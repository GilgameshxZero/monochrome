@ECHO OFF
@REM Forwards local port %2 to remote port $1 on gilgamesh.cc. Delays 4 seconds if fails.
:LOOP
CALL ssh -N -R :%1:127.0.0.1:%2 -o ExitOnForwardFailure=yes -o ServerAliveInterval=60 root@gilgamesh.cc
TIMEOUT /NOBREAK /T 60 >NUL
GOTO LOOP
