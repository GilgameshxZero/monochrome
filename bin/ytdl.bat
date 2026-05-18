@ECHO OFF
@REM Proxy for `yt-dlp` with some defaults.
CALL  %~dp0/../app/yt-dlp.exe --cookies-from-browser chromium --js-runtimes node --remote-components ejs:github -f "bv[height>=720][filesize<1G] + ba[filesize < 100M] / wv[height>=720] + wa[filesize >= 100M] / wv + wa" %*
