# `gilgamesh-58`

DigitalOcean linux server hosting gilgamesh.cc
1vCPU | 0.5GB RAM | 10GB SSD | 500GB Transfer/Month
Debian 13
D4A5BFZ-AUHJYQZ-TX7EC47-VIIDA6Z-6IFD6JE-NAV27Z4-2VQVQND-VNXMHAS

Most services are set up to start automatically with `systemd`. It remains to configure `emilia` to startup automatically. Currently, this is done with the following script:

```bash
cd ~/main.syncthing/monochrome/local.syncthing/module/emilia/build/ && make run BUILD=1 ARGS="--http-port=80 --smtp-port=25 --http-password=<WITHHELD> --smtp-forward=<WITHHELD> --smtp-password=<WITHHELD> --smtp-loopback-address=<WITHHELD>" VERSIONING=0
```
