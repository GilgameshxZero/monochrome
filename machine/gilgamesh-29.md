# gilgamesh-29

Self-hosted linux server
AMD FX-6120 Six-Core | Nvidia GTX 1080 Ti | 24GB RAM | 500GB SSD | 8TB HDD
Manjaro Arch

## gilgamesh-36

`gilgamesh-29` hosts `gilgamesh-36` via a Docker QEMU VM. The scripts to launch and maintain this VM are located in `monochrome/config/gilgamesh-29`.

## gilgamesh-38

`gilgamesh-29` hosts `gilgamesh-38` via a QEMU VM.

## OpenGL VNC

Display `:0` is a physical display accelerated by the physical GPU. `x11vnc` runs with `virtualgl` to enable forwarding of graphics-accelerated applications on `:0`: `export DISPLAY=:0`.

## Genshin Welkin automation

Daily Welkin rewards are claimed automatically via a script running on display `:0` with `xdotool` and `an-anime-game-launcher`. Usage of `xrandr` is critical to ensure that `xdotool` clicks where desired.

```bash
while true; do /home/gilgamesh/main.syncthing/monochrome/config/gilgamesh-29/welkin.genshin; sleep 86400; done
```
