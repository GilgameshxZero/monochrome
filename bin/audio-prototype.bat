@ECHO OFF
@REM Downloads best quality MP3 from YouTube to be re-encoded in Opus.
ytdl -o "%~1.mp3" -x --audio-format mp3 -f bestaudio --audio-quality 320 --geo-bypass --no-playlist "%2"
@REM Normalizes gain/volume. Only works on MP3.
%~dp0/../local.syncthing/app/mp3gain/mp3gain.exe /r /t "%~1.mp3"
@REM Re-encodes to Opus VBR 96.
%~dp0/../local.syncthing/app/freac/freaccmd.exe --config="prototype" "%~1.mp3"
@REM Deletes MP3.
DEL "%~1.mp3"

@REM Once AVIF support comes to ID3, cover images should be encoded in AVIF instead of JPG.
