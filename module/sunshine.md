# sunshine

For the `2026.05` version of `sunshine-bin` on the AUR, the user `systemd` service is not created automatically. We provide service files here instead. Link them into `~/.config/systemd/user`.

## Moonlight

Moonlight on certain versions of Android (`gilgamesh-34`) fails to select the proper resolution depending on video decoder capabilities. We provide a custom build of the APK with custom resolutions under the module.

### Resolution configurations

Configurations under `moonlight-WIDTH-HEIGHT.*` are provided to be run upon connection to adjust the virtual display to the right resolution.

### EDIDs

Custom EDIDs are provided that either clone or allow a range of custom resolutions and refresh rates for different client connections.

### Root vs user service

User service will require some auto-logon-like script. We still prefer this for the most part.

## Sunshine with NVIDIA on Linux

1. <https://www.azdanov.dev/articles/2025/how-to-create-a-virtual-display-for-sunshine-on-arch-linux>.
2. Double check settings in `/etc/X11/xorg.conf.d/`.
3. `/etc/modprobe.d/blacklist.conf`.
4. Black SDDM fix: clear out `/etc/X11`. Should only be 00 and 30 left. No software mouse.
	1. Can use software mouse fix. Keep Driver empty.
		```conf
		Section "Device"
			Identifier "sw-mouse"
			Option "SWCursor" "true"
		EndSection
		```
5. Disable tray on user allows connect, but still black screen: <https://github.com/LizardByte/Sunshine/issues/2778>.
6. Wayland may still not work well with Sunshine <https://github.com/loki-47-6F-64/sunshine/issues/44>.
	1. May be an NVENC issue. Black screens if buffer is copied. Otherwise, still black screen (on Wayland).
7. Sound will work if launched as user service.
8. May be a virtual monitor bug: <https://github.com/LizardByte/Sunshine/issues/2044>.
9. Working on beta Sunshine and latest Manjaro!

## Bugs

1. May require manual patching of `libicu*.76`.
2. Disable HAGS/P7 helps with Moonlight stuttering.
3. <https://github.com/LizardByte/Sunshine/issues/93#issuecomment-3033636224>.
4. Moonlight stream to linux host isn’t glitchy after switching to software decode. For some reason this just works on Android, though I assume its using hardware decode.
	1. For client, install `intel-media-driver`.
	2. Forcing software HEVC on host also works.
