@ECHO OFF
IF "%1"=="video" (
	ECHO Not implemented.
) ELSE IF "%1"=="audio" (
	ECHO Not implemented.
) ELSE IF "%1"=="image" (
	ECHO Not implemented.
) ELSE IF "%1"=="file" (
	@REM Various Windows differences may make compression less
	@REM efficient for extremely large files. See comments.
	SETLOCAL EnableDelayedExpansion
	SET "reverse=0"
	SET "compress=0"
	SET "encrypt=0"
	FOR %%I IN (%*) DO (
		IF /I "%%I"=="--reverse" SET "reverse=1"
    IF /I "%%I"=="--compress" SET "compress=1"
    IF /I "%%I"=="--encrypt" SET "encrypt=1"
	)
	IF "!reverse!"=="1" (
		SET "pipe=tar -xf -"
		IF "!compress!"=="1" (
			SET "pipe=xz -d -M95% -vv | !pipe!"
		)
		IF "!encrypt!"=="1" (
			IF EXIST "%~3" (
				SET "pipe=age -d -i "%~3" | !pipe!"
			) ELSE (
				SET "pipe=gpg --decrypt --no-symkey-cache | !pipe!"
			)
		)
		TYPE "%~2" | CMD /C "!pipe!"
	) ELSE (
		SET "filename=%~2"
		IF "!filename:~-1!"=="\" SET "filename=!filename:~0,-1!"
		@REM No option to sort by name!
		SET "pipe=tar -cf - "!filename!""
		SET "filename=!filename!.tar"
		IF "!compress!"=="1" (
			SET "filename=!filename!.xz"
			@REM No sane memory limit option!
			SET "pipe=!pipe! | xz -9 -T0 -vv --lzma2=dict=1024MiB"
		)
		IF "!encrypt!"=="1" (
			IF EXIST "%~3" (
				SET "filename=!filename!.age"
				SET "pipe=!pipe! | age -R "%~3""
			) ELSE (
				SET "filename=!filename!.gpg"
				SET "pipe=!pipe! | gpg --compress-algo none --symmetric --no-symkey-cache"
			)
		)
		CMD /C "!pipe!" > "!filename!"
	)
	ENDLOCAL
)
