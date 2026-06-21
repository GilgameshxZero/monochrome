@ECHO OFF
@REM This can be linked via `gx` to a task in Task Scheduler "on log on". Consider delaying for 30 seconds for consistency.
IF "%1" == "31" (
	openvpn-gui --command disconnect_all
	openvpn-gui --command connect gilgamesh-31
	openvpn-gui --command connect gilgamesh-45.split
) ELSE IF "%1" == "45" (
	openvpn-gui --command disconnect_all
	openvpn-gui --command connect gilgamesh-31.split
	openvpn-gui --command connect gilgamesh-45
) ELSE (
	openvpn-gui --command disconnect_all
	openvpn-gui --command connect gilgamesh-31.split
	openvpn-gui --command connect gilgamesh-45.split
)
