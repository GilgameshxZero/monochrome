# gilgamesh-43

MacOS server running on `gilgamesh-40`
AMD 5950X 4x | 8GB RAM | 512GB
MacOS
OYQNCEI-VB4L4A4-GKQ7HKB-OZYTISA-MPYEJCU-FENEWJT-JLH6JUC-LDQNSQN

This machine also retains an XCode compiler and may compile C++ code with `apple-clang`. The Syncthing node only syncs with `gilgamesh-44`, which runs on the same hardware. This minimizes network utilization when a machine outside the network wishes to sync.

The general configuration is cloned from <https://github.com/luchina-gabriel/OSX-PROXMOX>.

## `config.plist`

1. <https://www.reddit.com/r/hackintosh/comments/i48kxw/wheres_configplist/>.

Our modified and working `config.plist` is provided. This may contain sensitive keys.

## SIP (WIP, but I think disabled)

From recovery,

```bash
csrutil disable
csrutil authenticated-root disable
```

1. <https://stackoverflow.com/questions/32659348/operation-not-permitted-when-on-root-el-capitan-rootless-disabled>.

Also, <https://discussions.apple.com/thread/254915449?answerId=259150545022&sortBy=rank#259150545022>. Need to unmount then mount to write to filesystem in recovery mode. Maybe?

1. <https://stackoverflow.com/questions/73048614/can-i-mount-the-root-system-filesystem-as-writable-in-macos-monterey>. Bless in Recovery mode. Doesn't work.

## EDID override (WIP)

1. `/System/Library/Displays/Contents/Resources/Overrides/DisplayVendorID-756e6b6e/DisplayProductID-717`, keys via `defaults read /Library/Preferences/com.apple.windowserver.plist`.

Must be modified via Recovery mode.

## VPN

For some reason, complete tunnels will cause the network to fail over time. For now, we maintain the network interfaces on `gilgamesh-43` to only utilize the split tunnels.

## GPU passthrough trail

1. <https://forum.proxmox.com/threads/gpu-passthrough-on-proxmox-ve-macos-monterey-part-04x04.140579/page-2>.
2. <https://elitemacx86.com/threads/how-to-spoof-graphics-on-macos-intel-amd-nvidia.1008/>.
3. <https://dortania.github.io/Getting-Started-With-ACPI/Universal/spoof.html>.
4. <https://github.com/TylerLyczak/Unsupported-6900XT-Hackintosh-Fix?tab=readme-ov-file>.
5. <https://elitemacx86.com/threads/how-to-enable-h-264-and-hevc-h-265-encoding-on-macos.468/>.
6. Just these modifications worked: <https://www.reddit.com/r/hackintosh/comments/1mdtif0/hardware_acceleration_on_sequoia_155_with_rx_550/>. I didn't need the `aml` file at all (or, at least not in the `config.plist`)?
7. Resetting NVRAM not necessary?
	1. Unclear. Copied `config.plist` for reference. Please don't steal the IDs.
