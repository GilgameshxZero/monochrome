# `vpn`

## Server configuration

A VPN server is available on `gilgamesh.cc`/`159.65.224.199` via instructions at <https://github.com/hwdsl2/setup-ipsec-vpn>: `wget https://get.vpnsetup.net -O vpn.sh && sudo sh vpn.sh`

IKEv2 clients may be managed with `sudo ikev2.sh` and should roughly mirror `gilgamesh-*` machine structure and naming.

## Client configuration

### IPsec/L2TP

```
Server IP: 159.65.224.199
IPsec PSK: gb3UjkTcLhvmukZCbPYi
Username: vpnuser
Password: tD2kbmZa5e65PfqG
```

### IKEv2

Multiple connections from the same router may be denied. To avoid this, connect with IKEv2.
IKEv2 clients may connect with certificates found in `monochrome/config/vpn`.

Password (if required): `zSSdRFY2tf2fyXHvYC`.

#### Windows

The IP address will need to be changed should `gilgamesh.cc` be hosted from a different IP. The following script should be run from an admin-level cmd from `monochrome/config/vpn`, and is interactive, so should be run line-by-line.

The files themselves may need to be renamed in order for the connection name to be set correctly as `gilgamesh.cc-X`, for machine `gilgamesh-X`.

```batch
SET "VPN_NAME=gilgamesh-31"
certutil -f -importpfx "%VPN_NAME%.p12" NoExport
powershell -command "Add-VpnConnection -ServerAddress '159.65.224.199' -Name '%VPN_NAME%' -TunnelType IKEv2 -AuthenticationMethod MachineCertificate -EncryptionLevel Required -PassThru"
powershell -command "Set-VpnConnectionIPsecConfiguration -ConnectionName '%VPN_NAME%' -AuthenticationTransformConstants GCMAES128 -CipherTransformConstants GCMAES128 -EncryptionMethod AES256 -IntegrityCheckMethod SHA256 -PfsGroup None -DHGroup Group14 -PassThru -Force"
```

#### iOS

Use the `*.mobileconfig` file generated in `monochrome/config/vpn`.

## Usage

For some reason, IKEv2 clients cannot connect via `xfinitywifi` or `XFINITY` Wi-Fi hotspots. However, they may be able to form P2P connections, thus enabling VPN’d bittorrent.

## OpenVPN

An experimental OpenVPN server has been set up on `gilgamesh.cc`. Note that beyond the guide, I had to disable all `iptables` rules such as what I did for `emilia`. Namely, clear IP tables and run `iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE;` with the correct ethernet interface name `eth0`.

I also needed `tun-mtu 1400` on the server config sometimes.

Also, <https://superuser.com/questions/1274955/use-windows-mobile-hotspot-with-openvpn>.

The CA password is the same as the Emilia HTTP password.

```bash
cd ~/easy-rsa/
./easyrsa gen-req gilgamesh-34 nopass
cp ~/easy-rsa/pki/private/gilgamesh-34.key ~/client-configs/keys/
./easyrsa sign-req client gilgamesh-34
cp ~/easy-rsa/pki/issued/gilgamesh-34.crt ~/client-configs/keys/
cd ~/client-configs/
./make_config.sh gilgamesh-34
```

```ovpn
redirect-gateway def1
block-outside-dns
```
