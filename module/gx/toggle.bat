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
)
