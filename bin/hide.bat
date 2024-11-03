@ECHO OFF
@REM Run %* with its window hideen. Requires `hide.vbs`.
wscript %~dp0/hide.vbs %*
