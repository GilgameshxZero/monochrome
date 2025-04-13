# gilgamesh-31

DigitalOcean linux server hosting gilgamesh.cc
1vCPU | 1GM RAM | 25GB SSD | 1TB Transfer
Ubuntu
N/A

A guest user `guest` retains only `-N` forwarding permissions (`/etc/ssh/sshd_config`):

```
Match User guest
	AllowTcpForwarding yes
	X11Forwarding no
	AllowAgentForwarding no
	ForceCommand /bin/false
```
