@ECHO OFF
@REM Proxy for `yt-dlp` with some defaults.
CALL yt-dlp --cookies-from-browser chromium --js-runtimes node --remote-components ejs:github %*
