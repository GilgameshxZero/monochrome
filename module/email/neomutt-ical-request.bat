@echo off
setlocal DisableDelayedExpansion
bash "%~dpn0" %*
exit /b %errorlevel%
