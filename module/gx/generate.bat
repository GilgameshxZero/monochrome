@ECHO OFF
SETLOCAL EnableDelayedExpansion
IF "%1"=="password" (
	FOR /F "DELIMS=" %%I IN ('openssl rand 512 ^| tr -dc "2346789abcdefghijkmnpqrstuvwxyz" ^| head -c 22') DO SET "id=^!A%%I"
) ELSE IF "%1"=="uuid" (
	FOR /F "DELIMS=" %%I IN ('powershell -NoProfile -Command "[guid]::NewGuid()"') DO SET "id=%%I"
)
@REM TOTP not implemented.
ECHO(!id!
<NUL SET /P "=!id!" | CLIP
ENDLOCAL
