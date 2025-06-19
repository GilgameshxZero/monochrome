@REM Launch Genshin directly with arguments as specified in `%*`, but while replacing HoyoKProtect.sys for the duration of the launch and suppressing registry errors. HoyoKProtect.sys is restored after 30 seconds and must be restored before any world area is loaded.
@REM Must be run elevated.
@REM Arguments e.g. `-popupwindow -screen-width 2880 -screen-height 1800`

@REM Genshin will launch only if HoyoKProtect.sys is not available. It will fail to load in if HoyoKProtect.sys is not available. It will fail during gameplay if ???.

@REM Launch instructions:
@REM Remove HoyoKProtect.sys.
@REM Launch Genshin.
@REM Restore HoyoKProtect.sys.
@REM Load to door.
@REM Firewall network access from Genshin.
@REM Attempt to load past door.
@REM Remove firewall.
@REM Load past door.
@REM Teleport.
@REM Firewall network access from Genshin.
@REM Reload past door.
@REM Remove firewall.

@REM Notes: System32 is empty HoyoKProtect.sys.

@REM New version (Skirk) seems to just work with removed HoyoKProtect.sys.
@ECHO OFF

@REM SET "GENSHIN_DIR=C:\Program Files\HoYoPlay\games\Genshin Impact game\"

@REM MOVE "%GENSHIN_DIR%HoyoKProtect.sys" "%GENSHIN_DIR%HoyoKProtect.sys.tmp"
@REM ECHO Hid HoyoKProtect.

@REM START CMD /C ^
@REM 	TIMEOUT /T 32 ^& ^
@REM 	COPY NUL "%GENSHIN_DIR%HoyoKProtect.sys"
@REM ECHO Launching Genshin...
@REM "%GENSHIN_DIR%GenshinImpact.exe" %*

@REM MOVE "%GENSHIN_DIR%HoyoKProtect.sys.tmp" "%GENSHIN_DIR%HoyoKProtect.sys"
@REM ECHO Reset HoyoKProtect.

SET "REG_ITERATIONS=1024000"

ECHO Resetting registry.
FOR /L %%i IN (1,1,%REG_ITERATIONS%) DO (
	@REM ECHO Registry reset %%i/%REG_ITERATIONS%.
	REG add "HKLM\SYSTEM\ControlSet001\Services\HoYoProtect" /v "ErrorControl" /t REG_DWORD /d 0 /f
	REG add "HKLM\SYSTEM\ControlSet001\Services\HoYoProtect" /v "Start" /t REG_DWORD /d 0 /f
	REG add "HKLM\SYSTEM\ControlSet001\Services\HoYoProtect" /v "Type" /t REG_DWORD /d 0 /f

	@REM PING to microsleep.
	@REM PING 192.0.2.1 -n 1 -w 1 >NUL
)
