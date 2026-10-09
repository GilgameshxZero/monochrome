@ECHO OFF
mpv ^
	--script-opts="ytdl_hook-ytdl_path=%~dp0/../../module/gx/yt-dlp.bat" ^
	%*
