# gilgamesh-43

MacOS server running on `gilgamesh-40`
AMD 5950X 1x | 8GB RAM | 512GB
MacOS
OYQNCEI-VB4L4A4-GKQ7HKB-OZYTISA-MPYEJCU-FENEWJT-JLH6JUC-LDQNSQN

This machine also retains an XCode compiler and may compile C++ code with `apple-clang`. The Syncthing node only syncs with `gilgamesh-44`, which runs on the same hardware. This minimizes network utilization when a machine outside the network wishes to sync.

1. <https://www.reddit.com/r/hackintosh/comments/i48kxw/wheres_configplist/>.

## SIP

From recovery,

```bash
csrutil disable
csrutil authenticated-root disable
```

1. <https://stackoverflow.com/questions/32659348/operation-not-permitted-when-on-root-el-capitan-rootless-disabled>.

Also, <https://discussions.apple.com/thread/254915449?answerId=259150545022&sortBy=rank#259150545022>. Need to unmount then mount to write to filesystem in recovery mode. Maybe?

1. <https://stackoverflow.com/questions/73048614/can-i-mount-the-root-system-filesystem-as-writable-in-macos-monterey>. Bless in Recovery mode. Doesn't work.

## EDID override

1. `/System/Library/Displays/Contents/Resources/Overrides/DisplayVendorID-756e6b6e/DisplayProductID-717`, keys via `defaults read /Library/Preferences/com.apple.windowserver.plist`.

Must be modified via Recovery mode.
