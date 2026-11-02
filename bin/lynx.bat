@echo off
setlocal
set "LYNX_CFG=%~dp0..\app\lynx\lynx.cfg"
set "LYNX_LSS=%~dp0..\app\lynx\lynx.lss"
"%~dp0..\app\lynx\lynx.exe" -width=80 %*
exit /b %errorlevel%
