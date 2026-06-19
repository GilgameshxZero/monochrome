# `vpn`

OpenVPN servers are available at the default port at:

1. <gilgamesh.cc> (`gilgamesh-31`)
2. <gilgamesh-40.duckdns.org> (`gilgamesh-45`, with its port tunneled to its hypervisor `gilgamesh-40`).

Reference configurations for existing clients are available on the server, and must be generated for each new client. Client `gilgamesh-X` is assigned subnet IP `10.8.Y.X`, where `Y` is the identifier of the server. Client assignments are declared on the server at `/etc/openvpn/server/ccd/*`.

`gilgamesh-31` is configured with a legacy OpenVPN setup via <https://www.digitalocean.com/community/tutorials/how-to-set-up-and-configure-an-openvpn-server-on-ubuntu-20-04>. `gilgamesh-45` is configured with the preferred script from <<https://www.digitalocean.com/community/tutorials/how-to-set-up-and-configure-an-openvpn-server-on-ubuntu-20-04>. Both servers require “clear” `iptables` rules to function.

## NAT

All VPN configurations create an internal NAT with addressing scheme `10.8.x.y` to refer to `gilgamesh-y` on the NAT of `gilgamesh-x`.

## OpenVPN

An experimental OpenVPN server has been set up on `gilgamesh.cc` following the guide at <https://www.digitalocean.com/community/tutorials/how-to-set-up-and-configure-an-openvpn-server-on-ubuntu-20-04>. Note that beyond the guide, I had to disable all `iptables` rules such as what I did for `emilia`. Namely, clear IP tables and run `iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE;` with the correct ethernet interface name `eth0` using `ip route get`. This should already be encoded in the respective `iptables` autostart services on each host.

Add `ipv6` to the server pushes to ensure that client ipv6 requests do not sneak through.

Also, <https://superuser.com/questions/1274955/use-windows-mobile-hotspot-with-openvpn>.

The CA password is the same as the Emilia HTTP password.

```bash
export CLIENT_NAME=gilgamesh-51;
cd ~/easy-rsa/;
./easyrsa gen-req $CLIENT_NAME nopass;

cp ~/easy-rsa/pki/private/$CLIENT_NAME.key ~/client-configs/keys/;
./easyrsa sign-req client $CLIENT_NAME;

cp ~/easy-rsa/pki/issued/$CLIENT_NAME.crt ~/client-configs/keys/;
cd ~/client-configs/;
./make_config.sh $CLIENT_NAME;
```

```ovpn
redirect-gateway def1
block-outside-dns
```

In the server config, we may write:

```conf
push "redirect-gateway ipv6 def1 bypass-dhcp"
```

Note that the order of the pushes does matter. Notably, `ipv6` is nonstandard but prevents IPv6 DNS leaks on some clients.

Create a split tunnel on each client by routing specific subnets only:

```conf
route-nopull
route 10.8.0.0 255.255.255.0
# route 192.168.50.0 255.255.255.0
route 0.0.0.0 0.0.0.0
```

The second route allows traffic (e.g. bittorrent) which selects only the VPN interface to route correctly. There usually exists another route `0.0.0.0 0.0.0.0` on the default interface with lower metric, so usual traffic is routed outside the VPN.

You may verify your public IP from the command line with `curl https://api.ipify.org`. For this to work properly, DNS outside tunnels must be enabled.

```conf
# ignore-unknown-option block-outside-dns
# setenv opt block-outside-dns # Prevent Windows 10 DNS leak
```

Preferred all-tunnel:

```ovpn
route-nopull
route gilgamesh.cc 255.255.255.255 net_gateway 0
route gilgamesh-40.duckdns.org 255.255.255.255 net_gateway 0
route 10.8.31.0 255.255.255.0 vpn_gateway 0
route 10.8.0.0 255.255.0.0 net_gateway 0
route 0.0.0.0 0.0.0.0 vpn_gateway 0

dhcp-option DNS 208.67.222.222
dhcp-option DNS 208.67.220.220
dhcp-option DNS 1.1.1.1
dhcp-option DNS 8.8.8.8
```

Preferred split tunnel:

```ovpn
route-nopull
route 10.8.45.0 255.255.255.0 vpn_gateway 0
route 0.0.0.0 0.0.0.0 net_gateway 0
route 0.0.0.0 0.0.0.0 vpn_gateway 500

dhcp-option DNS 208.67.222.222
dhcp-option DNS 208.67.220.220
dhcp-option DNS 1.1.1.1
dhcp-option DNS 8.8.8.8
```

Mobile clients split tunnels require some fiddling. This is because the configuration is slightly different (we may need an explicit route for the endpoint, and to remove the second default gateway route). By default we do not provide split tunnels for mobile clients.

`persist-tun` should be used for full tunnels to ensure no data leakage. Right now this doesn’t work so well, because of the up/down scripts (on *nix) and some recursive routing shenanigans (verb 4) if the network is changed (due to some routes being removed and not re-added). It is set for MacOS since route removal on MacOS seems to fail.

`block-outside-dns` needs to be removed for split tunnels.
