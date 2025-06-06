@ECHO OFF
@REM Downsize image for use in `sviva`.
FOR /R %%i IN ("*.png") DO (
	@ECHO "%%i"

	@REM Compresses PNG files down for storage.
	@REM -type palette -colors 256 reduces size dramatically but cuts quality.
	CD "%%~dpi"
	CALL magick mogrify -resize "1920x1080>" -strip -depth 8 -quality 100 "%%~nxi"

	@REM @ECHO %%~dpi
	@REM @ECHO %%~nxi
)
