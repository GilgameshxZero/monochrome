@REM Extract AAC audio from video file. The filename will be preserved and AAC will be appended.
@REM %~1: original video filename.
CALL ffmpeg -i "%~1" -vn -acodec copy "%~1.aac"
