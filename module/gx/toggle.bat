IF "%1" == "vpn" (
	FOR /F "DELIMS=" %%I IN ('CURL -s api.ipify.org') DO (
		IF "%%I" == "152.42.140.161" (
			gx vpn 47
			ECHO Enabled gilgamesh-47.ovpn.
		) ELSE (
			gx vpn 58
			ECHO Enabled gilgamesh-58.ovpn.
		)	
	)
) ELSE IF "%1" == "theme" (
	FOR /F "TOKENS=* USEBACKQ" %%I IN (`POWERSHELL "Get-ItemProperty -Path HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize -Name SystemUsesLightTheme"`) DO (
		SET "X=%%I"
		GOTO :BREAK1
	)
	:BREAK1
	FOR %%I IN (%X%) DO (
		SET "Y=%%I"
	)
	IF "%Y%" == "0" (
		CALL "%~dp0/../../theme/intent.deskthemepack"
	) ELSE (
		CALL "%~dp0/../../theme/intent-dark.deskthemepack"
	)
	TASKKILL /F /IM systemsettings.exe
)
