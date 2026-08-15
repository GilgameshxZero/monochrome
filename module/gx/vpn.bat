@ECHO OFF
@REM This can be linked via `gx` to a task in Task Scheduler "on log on". Consider delaying for 30 seconds for consistency.
IF "%1" == "47" (
	openvpn-gui --command disconnect_all
	openvpn-gui --command connect gilgamesh-47
	openvpn-gui --command connect gilgamesh-58.split
) ELSE IF "%1" == "58" (
	openvpn-gui --command disconnect_all
	openvpn-gui --command connect gilgamesh-47.split
	openvpn-gui --command connect gilgamesh-58
) ELSE IF "%1" == "0" (
	openvpn-gui --command disconnect_all
	openvpn-gui --command connect gilgamesh-47.split
	openvpn-gui --command connect gilgamesh-58.split
)
SLEEP 1
PING -n 1 -w 2 1.1.1.1 | grep -A1 statistics
PING -n 1 -w 2 10.8.40.1 | grep -A1 statistics
PING -n 1 -w 2 10.8.47.1 | grep -A1 statistics
PING -n 1 -w 2 10.8.58.1 | grep -A1 statistics
CURL -m1 api.ipify.org
ECHO[
CURL -m1 api6.ipify.org
ECHO[
