@echo off
setlocal DisableDelayedExpansion
rem xargs needs the native executable rather than the khard batch launcher.
set "NEOMUTT_QUERY_KHARD=%~dp0../../app/khard.exe"
set "NEOMUTT_QUERY_KHARD=%NEOMUTT_QUERY_KHARD:\=/%"
bash "%~dpn0" %*
exit /b %errorlevel%
