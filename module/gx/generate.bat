@ECHO OFF
SETLOCAL EnableDelayedExpansion
IF "%1"=="password" (
	FOR /F "DELIMS=" %%I IN ('openssl rand 256 ^| tr -dc "2-9a-z" ^| head -c 20') DO SET "id=^!1Aa%%I"
) ELSE IF "%1"=="uuid" (
	FOR /F "DELIMS=" %%I IN ('powershell -NoProfile -Command "[guid]::NewGuid()"') DO SET "id=%%I"
)
@REM TOTP not implemented.
ECHO(!id!
<NUL SET /P "=!id!" | CLIP
ENDLOCAL
