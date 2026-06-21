@ECHO OFF
@REM Repeat `%*` with a delay of 60 seconds in between.
:LOOP
CALL %*
TIMEOUT /NOBREAK /T 60 >NUL
GOTO LOOP
