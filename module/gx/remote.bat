@ECHO OFF
IF "%1" == "34" (
	scrcpy -f --tcpip=10.8.58.34 --no-audio
) ELSE IF "%1" == "42" (
	moonlight stream --resolution 2880x1800 --fps 120 --bitrate 32000 10.8.47.42 Desktop
) ELSE IF "%1" == "43" (
	moonlight stream --resolution 2880x1800 --fps 120 --bitrate 32000 10.8.47.43 default
) ELSE IF "%1" == "48" (
	scrcpy -f --tcpip=10.8.40.48 --orientation 270
) ELSE IF "%1" == "49" (
	moonlight stream --resolution 2880x1800 --fps 120 --bitrate 32000 10.8.47.49 default
) ELSE IF "%1" == "50" (
	scrcpy -f --tcpip=10.8.58.50 --no-audio
) ELSE IF "%1" == "57" (
	scrcpy -f --tcpip=10.8.58.57 --no-audio
)
