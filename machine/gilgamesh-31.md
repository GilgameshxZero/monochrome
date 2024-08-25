# gilgamesh-31

DigitalOcean linux server hosting gilgamesh.cc
1vCPU | 1GM RAM | 25GB SSD | 1TB Transfer
Ubuntu

This follows a standard `server-linux` machine configuration.

A guest user `guest` only has `-N` forwarding permissions (`/etc/ssh/sshd_config`):

```
Match User guest
	AllowTcpForwarding yes
	X11Forwarding no
	AllowAgentForwarding no
	ForceCommand /bin/false
```
