@ECHO OFF
"C:\Program Files\OpenVPN\bin\openvpn-gui" --command disconnect_all
"C:\Program Files\OpenVPN\bin\openvpn-gui" --command connect %*
