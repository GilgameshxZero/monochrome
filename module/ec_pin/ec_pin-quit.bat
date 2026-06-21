@ECHO OFF
@REM Call location is important for `ec_pin`.
CD %~dp0/../../app/
CALL ec_pin.exe --quit
