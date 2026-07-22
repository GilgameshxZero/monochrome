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
) ELSE IF "%1" == "0" (
	openvpn-gui --command disconnect_all
	openvpn-gui --command connect gilgamesh-31.split
	openvpn-gui --command connect gilgamesh-45.split
)
SLEEP 1
PING -n 1 -w 1 1.1.1.1 | grep -A1 statistics
PING -n 1 -w 1 10.8.31.1 | grep -A1 statistics
PING -n 1 -w 1 10.8.40.1 | grep -A1 statistics
PING -n 1 -w 1 10.8.45.1 | grep -A1 statistics
PING -n 1 -w 1 10.8.47.1 | grep -A1 statistics
CURL api.ipify.org
ECHO[
