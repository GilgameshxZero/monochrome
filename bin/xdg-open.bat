@echo off
setlocal DisableDelayedExpansion
rem Open one file or URL with its Windows default application.
start "" "%~1"
exit /b %errorlevel%
