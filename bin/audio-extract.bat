@REM Extract AAC audio from video file.
ffmpeg -i "%~1" -vn -acodec copy "%~1.aac"
