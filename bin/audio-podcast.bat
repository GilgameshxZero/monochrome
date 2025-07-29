@ECHO OFF
@REM Normalizes all `mp3` files in the current directory to `prototype` format.
@REM For all `mp3` files in current directory.
FOR /F "delims=|" %%i IN ('DIR /B *.mp3') DO (
	@REM Normalizes gain/volume. Only works on `mp3`.
	CALL %~dp0/../app/mp3gain/mp3gain.exe /r /t "%%i"
	@REM Re-encodes to Opus VBR 16.
	CALL %~dp0/../app/freac/freaccmd.exe --config="podcast" "%%i"
	@REM Deletes MP3.
	DEL "%%i"
)
