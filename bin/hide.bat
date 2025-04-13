@ECHO OFF
@REM Run %* with its window hideen. Requires `hide.vbs`.
CALL wscript %~dp0/hide.vbs %*
