@ECHO OFF
@REM Repeat `%*` with a delay of 4 seconds in between.
:LOOP
CALL %*
TIMEOUT /NOBREAK /T 4 >NUL
GOTO LOOP
