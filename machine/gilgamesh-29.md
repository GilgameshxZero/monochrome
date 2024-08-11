# gilgamesh-29

Self-hosted linux server
AMD FX-6120 Six-Core | Nvidia GTX 1080 Ti | 24GB RAM | 500GB SSD | 8TB HDD
Manjaro Arch
LRKLRGL-GVOE3RB-2UVC2V7-JYWXHI4-NO7SRML-FWXPLP4-JMGIZZ2-X4W4PAR

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

## Services

Servies added to `systemctl` are placed in `/etc/systemd/system`. See <https://www.shubhamdipt.com/blog/how-to-create-a-systemd-service-in-linux/> for a short tutorial.

## vGPU passthrough

Attempted <https://github.com/DualCoder/vgpu_unlock> with drivers from <https://justpaste.it/ff63dcbf-e408-4079-b625-664a3b4b>. We didn't get far enough, but the guide at <https://docs.google.com/document/d/1pzrWJ9h-zANCtyqRgS7Vzla0Y8Ea2-5z2HEi4X75d2Q/edit> seems good (but complicated). It is probably preferred to just have a second physical GPU.

Another guide: <https://github.com/tuh8888/libvirt_win10_vm?tab=readme-ov-file>.
