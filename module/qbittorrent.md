# `qbittorrent`

qBittorrent is preferred for downloading torrents on clients, and sometimes servers.

## Configuration

### Windows

The configuration files live at `%USERPROFILE%\AppData\Roaming\qBittorrent` and are periodically replicated to `monochrome/module/qbittorrent`.

### Linux

We use headless `qbittorrent-nox` for a web interface.

See `vpn` for ways to configure a split tunnel, and restrict the torrent client onto the `tun0` interface.

Setting permissions can be difficult. We choose to `setfacl -m u:qbt:x /home/gilgamesh` for minimal permissions on the home folder, not interfering with SSHD, and then `setfacl -m u:qbt:rwx /home/gilgamesh/Downloads` for the rest of the permissions.
