@ECHO OFF
@REM Using CALL here necessitates %%%% to double-escape, rather than the single-escape %% here.
"%~dp0/../../app/yt-dlp.exe" ^
	--js-runtimes node ^
	--remote-components ejs:github ^
	--cookies-from-browser chromium ^
	--output "%%(uploader)s-%%(title)s.%%(ext)s" ^
	--restrict-filenames ^
	--windows-filenames ^
	--format "bv[height>=720][vbr<=1536] + ba[abr<=256] / b[tbr<=1792] / wv[height>=720] + wa / wv + wa / w" ^
	%*
