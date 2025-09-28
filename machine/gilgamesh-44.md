# gilgamesh-44

Linux server running on `gilgamesh-40`
AMD 5950X | 16GB RAM | 256GB
Arch Linux
H3K43PN-VQLLRNN-ZELPVX2-BXYVYAI-I764AWO-IPFERPI-7R7LIM2-2DMOJA7

This is the *main* syncthing node, and all nodes connect to this one. Other syncthing nodes on `gilgamesh-40` only sync with this node.

## Sunshine

```10-monitor.conf
Section "Monitor"
        Identifier "Virtual-1"
        Modeline "2880x1800_120.00"  934.00  2880 3136 3456 4032  1800 1803 1809 19
31 -hsync +vsync
        Option "PreferredMode" "2880x1800_120.00"
EndSection
```

```90-mouse.conf
Section "Device"
    Identifier "sw-mouse"
    Driver "modesetting"
    Option "SWCursor" "true"
EndSection
```

```bash
sudo systemctl restart sddm
```

## `ytdl`

We are using `yt-dlp` from Pacman in favor of `ytdl` from anywhere else.

## `ovpn`

Use

```bash
sudo openvpn --config ~/main.syncthing/monochrome/machine/gilgamesh-44/gilgamesh-31.split.ovpn
```
