IF "%1" == "vpn" (
	FOR /F "DELIMS=" %%I IN ('CURL -s api.ipify.org') DO (
		IF "%%I" == "159.65.224.199" (
			gx vpn 45
			ECHO Enabled gilgamesh-45.ovpn.
		) ELSE (
			gx vpn 31
			ECHO Enabled gilgamesh-31.ovpn.
		)	
	)
)
