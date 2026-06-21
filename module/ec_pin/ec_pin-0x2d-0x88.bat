@ECHO OFF
@REM Call location is important for `ec_pin`.
CD %~dp0/../../app/
CALL ec_pin.exe --register 45 --value 136 --interval 400
