@ECHO OFF
CALL %~dp0/../../app/aria2c.exe ^
	-u 16 ^
	--seed-time 0 ^
	--stream-piece-selector=inorder ^
	--bt-prioritize-piece=head=64M ^
	--bt-load-saved-metadata ^
	--bt-request-peer-speed-limit=1M ^
	%*
