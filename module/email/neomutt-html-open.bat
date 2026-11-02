@echo off
setlocal
if not defined BROWSER set "BROWSER=xdg-open.bat"
bash "%~dpn0" %*
exit /b %errorlevel%
