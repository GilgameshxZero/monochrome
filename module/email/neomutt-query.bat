@echo off
setlocal
bash "%~dpn0" %*
exit /b %errorlevel%
