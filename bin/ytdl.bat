@ECHO OFF
@REM Proxy for `yt-dlp` with some defaults.
CALL  %~dp0/../app/yt-dlp.exe --cookies-from-browser chromium --js-runtimes node --remote-components ejs:github %*
