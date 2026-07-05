# gilgamesh-31

DigitalOcean linux server hosting gilgamesh.cc
1vCPU | 1GM RAM | 25GB SSD | 1TB Transfer
Ubuntu
N/A

We must configure `emilia`, `iodine` on this server on startup.

## `guest` forwarding

A guest user `guest` retains only `-N` forwarding permissions (`/etc/ssh/sshd_config`):

```
Match User guest
	AllowTcpForwarding yes
	X11Forwarding no
	AllowAgentForwarding no
	ForceCommand /bin/false
```

## Outbound via reserved IP

For additional flexibility for droplets: <https://docs.digitalocean.com/products/networking/reserved-ips/how-to/outbound-traffic/>.

Unfortunately this doesn’t support reverse DNS (PTR), so we will not be using it.
