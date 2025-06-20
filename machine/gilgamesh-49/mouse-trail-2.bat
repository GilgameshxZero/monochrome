@ECHO OFF
REG add "HKEY_CURRENT_USER\Control Panel\Mouse" /v "MouseTrails" /t REG_SZ /d 2 /f
PowerShell -windowstyle hidden -NoProfile -ExecutionPolicy Bypass -File "mouse-trail-update.ps1"
