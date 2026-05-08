# `aria2`

`aria2` is the preferred method to download torrents. It is command-line based, unlike `qBittorrent`.

To avoid overseeding, use:

```bash
aria2c -u 16 --seed-time 0 "<LINK>"
```
