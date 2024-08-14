# iodine

iodine enables DNS tunneling on networks which block general traffic but not DNS. Configurations depend on the IP of the server, which may change over time.

## Server

```bash
# eth0 may need to be changed depending on the specific interface!
# Use ip link show
apt-install iodine;
echo 1 > /proc/sys/net/ipv4/ip_forward;
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE;
iptables -A FORWARD -i eth0 -o dns0 -m state --state RELATED,ESTABLISHED -j ACCEPT;
iptables -A FORWARD -i dns0 -o eth0 -j ACCEPT;
```

Then, in a persistent `tmux` session:

```bash
iodined -f -c -P "1#GXVeMc" 192.168.99.1 iodine.gilgamesh.cc
```

## Client

As configured in `~/main.syncthing/monochrome/bin`:

```batch
iodine
```

This process is not perfect and needs adjusting. A valid installation of the TAP driver for windows is necessary for general tunneling, which simple ssh-based proxies are enabled by the first part of the `iodine` script.
