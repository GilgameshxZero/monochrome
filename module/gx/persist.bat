@ECHO OFF
IF "%~1" == "" (
	ECHO Usage: persist session
	EXIT /B 1
)
CALL tmux has-session -t "%~1" >NUL 2>&1
@REM Setting status off is not applied reliably; minor issue.
IF ERRORLEVEL 1 (
	PUSHD "%USERPROFILE%\main.syncthing"
	CALL tmux new-session -d -s "%~1"
	CALL tmux set-option -t "%~1" status off
	CALL tmux send-keys -t "%~1" "%~1" Enter
	POPD
)
IF NOT DEFINED TMUX (
	CALL tmux attach-session -t "%~1"
) ELSE (
	CALL tmux detach-client -E "tmux attach-session -t %~1"
)
