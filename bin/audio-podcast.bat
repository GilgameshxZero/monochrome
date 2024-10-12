@ECHO OFF
@REM For all mp3 files in current directory.
FOR /F "delims=|" %%i IN ('DIR /B *.mp3') DO (
	@REM Normalizes gain/volume. Only works on MP3.
	%~dp0/../archive.syncthing/app/mp3gain/mp3gain.exe /r /t "%%i"
	@REM Re-encodes to Opus VBR 16.
	%~dp0/../archive.syncthing/app/freac/freaccmd.exe --config="podcast" "%%i"
	@REM Deletes MP3.
	DEL "%%i"
)
