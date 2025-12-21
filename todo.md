1. Persist `iptables` rules through reboot on `gilgamesh-31` and `gilgamesh-45`.
	1. Might already be done?
2. `watch -n 0.1 iostat -d 1 2 nvme0n1 sda sdb`
3. <https://forum.proxmox.com/threads/amd-bsod-unsupported-processor-since-windows-build-26100-4202-update-kb5060842-its-preview-kb5058499.166828/page-3>.
4. Understand what caused and resolved the word-style backspace on Windows VSCode SSH -> Windows.
	1. Something to do with held Alt/Ctrl.
5. Integer scaling.
6. git symlinks on Linux/MacOs.
7. Remove Windows version message on cmd.exe.
8. Disable Window Updates via Group Policy, Disabled.
9.  <https://dortania.github.io/OpenCore-Post-Install/universal/iservices.html#customer-code-error>
10. Hotspot adapter solution: <https://superuser.com/questions/1448054/choose-which-adapter-to-use-for-mobile-hotspot-on-windows-10>.
11. Also note how we were able to set up Ctrl+T hotkey in Edge via some file hacking.
12. juice testing.
	1.  It works, so we need to document this.
13. Microsoft Defender Antivirus: apply reg fix from <https://www.tenforums.com/tutorials/5918-how-turn-off-microsoft-defender-antivirus-windows-10-a.html>.
14. A proper security audit + isolation of services on `gilgamesh-44`.
15. Better backup/verification procedures for `Syncthing`.
16. `origin` tracking.
17. Filesystem-based MD DB spec (like is used in `sylph` and `utulek`) (FSMDDB).
18. <https://forum.proxmox.com/threads/about-idle-cpu-utilization-on-windows-11.133987/>.
19. `nct6775`.
20. `intel-media-driver` on Linux for iGPU video decode.
21. <https://www.reddit.com/r/Windows10/comments/1hygqe1/how_to_permanently_disable_windows_defender/>. (doesn't work?)
22. Disable HAGS/P7 helps with Moonlight stuttering.
23. <https://silvae86.github.io/2020/06/13/switching-to-acpi-power/#changing-to-acpi-cpufreq-cpu-management-driver>, <https://wiki.archlinux.org/title/Power_management>, <https://unix.stackexchange.com/questions/650873/why-does-my-cpu-disregard-the-maximum-frequency-set-by-e-g-cpupower-and-how-can>.
24. <https://www.reddit.com/r/GeForceNOW/comments/ynznkj/linux_users_can_now_enable_hardware_acceleration/> (doesn't work). (works on Wayland?) (check nvtop, edge://media-internals).
	1.  `--enable-features=UseOzonePlatform,VaapiVideoDecoder,VaapiVideoEncoder,AcceleratedVideoDecodeLinuxZeroCopyGL,AcceleratedVideoDecodeLinuxGL,VaapiIgnoreDriverChecks,VaapiOnNvidiaGPUs --ozone-platform-hint=wayland --use-gl=angle %U` works!
	2. `vainfo --display drm --device /dev/dri/renderD129`.
	3. `--enable-features=VaapiVideoDecoder,VaapiIgnoreDriverChecks,Vulkan,DefaultANGLEVulkan,VulkanFromANGLE`.
	4. `__NV_PRIME_RENDER_OFFLOAD=1 __GLX_VENDOR_LIBRARY_NAME=nvidia`.
	5. `--enable-features=AcceleratedVideoDecodeLinuxGL`.
	6. `--disable-gpu-driver-bug-workarounds --enable-features=VaapiVideoDecodeLinuxGL,UseChromeOSDirectVideoDecoder,CanvasOopRasterization,WebUIDarkMode --enable-gpu-rasterization --ignore-gpu-blocklist --ozone-platform=wayland`.
	7. `--use-angle=gles-egl`.
	8. `--use-gl=angle --use-angle=gl --enable-features=AcceleratedVideoEncoder,AcceleratedVideoDecodeLinuxGL,VaapiOnNvidiaGPUs --ignore-gpu-blocklist --disable-gpu-driver-bug-workaround`.
	9. `--use-gl=angle --use-angle=vulkan --enable-features=AcceleratedVideoEncoder,VaapiOnNvidiaGPUs,VaapiIgnoreDriverChecks,Vulkan,DefaultANGLEVulkan,VulkanFromANGLE --ignore-gpu-blocklist --disable-gpu-driver-bug-workaround`.
	10. `--enable-features=AcceleratedVideoDecodeLinuxZeroCopyGL,AcceleratedVideoDecodeLinuxGL,VaapiOnNvidiaGPUs`.
	11. WIP on `44`: `LIBVA_DRIVER_NAME=nvidia chromium --enable-features=AcceleratedVideoDecodeLinuxZeroCopyGL,AcceleratedVideoDecodeLinuxGL,VaapiOnNvidiaGPUs`.
25. Fix VLC player issues by installing all optional dependencies.
26. <https://discuss.kde.org/t/remote-control-requested-still-an-issue/24733>.
27. `/sys/class/backlight/intel_backlight/brightness` to `2`.
	1.  `echo 2 | sudo tee /sys/class/backlight/intel_backlight/brightness`.
28. Edge “restore default” theme.
29. <https://askubuntu.com/questions/150166/change-the-brightness-adjustment-interval>, `/usr/share/plasma/plasmoids/org.kde.plasma.brightness/contents/ui/PopupDialog.qml` to `/400`.
30. `sudo turbostat -i 1 -S -s PkgWatt,CorWatt,GFXWatt,RAMWatt,SysWatt`
31. vIOMMU = virtual for smooth FPS, HAGS on (unclear if this does anything).
32. Input Method -> Unicode -> Trigger key needs to be disabled for Alt+control+shuft+u stuff.
33. Chromium theme lags behind. To set dark theme, set dark theme twice in system settings KDE.
34. `pactl list sinks | grep Name:`.
35. `while true; do cat /sys/class/hwmon/hwmon3/power1_input ; sleep 1; done`.
36. Moonlight client on gilgamesh-50 breaks under gilgamesh-45 VPN. Why?
37. Only large cursors show on Linux host sunshine: <https://github.com/LizardByte/Sunshine/issues/93#issuecomment-3033636224>. Fix: <https://github.com/LizardByte/Sunshine/issues/93#issuecomment-1377858388>.
38. Moonlight stream to linux host isn’t glitchy after switching to software decode. For some reason this just works on Android, though I assume its using hardware decode.
	1.  For client, install `intel-media-driver`.
	2.  Forcing software HEVC on host also works.
39. `sudo pacman -Syu fcitx5 fcitx5-rime librime fcitx5-configtool`.
	1.  Virtual Keyboard settings.
	2.  Input Method settings.
	3.  Add-Ons -> Unicode -> Trigger Key (disable).
40. Self-signed certificates: <https://wiki.archlinux.org/title/Chromium#SSL_certificates>.
	1.  Doesn't work for sunshine because of bad CN in cert.
41. Root sunshine is good so that autologon isnt needed.
42. Windows SSH agent is broken with Codium SSH.
43. KDE > remove margin separator.
44. <https://xdaforums.com/t/solved-unable-to-locate-grub-on-android-x86.4522735/>.
45. `topology subnet` is required.
	1.  `dev tun-31`
	2.  `# persist-tun`
	3.  `remote gilgamesh.cc`
	4.  ```ovpn
		route-nopull
		route gilgamesh.cc 255.255.255.255 net_gateway 0
		route 10.8.31.0 255.255.255.0 vpn_gateway 0
		route 0.0.0.0 0.0.0.0 net_gateway 10
		# Some mobile OVPN clients do not like the multiple default gateways, so this is disabled. It is only useful for interface-fixed applications, like on desktop qBittorrent.
		route 0.0.0.0 0.0.0.0 vpn_gateway 500

		# Some mobile OVPN clients do not push DNS servers when route pushes are ignored, so we manually specify OpenDNS here.
		dhcp-option DNS 208.67.222.222
		dhcp-option DNS 208.67.220.220
		```
	5. <https://superuser.com/questions/1414464/multiple-client-connections-using-openvpn> works for Windows.
	6. Currently provisioned clients: 30, 44, 49, 51 (autostart pending).
	7. DNS leaks on linux: <https://unix.stackexchange.com/questions/434916/how-to-fix-openvpn-dns-leak>. WIP. Install issues.
		1. ```ovpn
			script-security 2
			up /etc/openvpn/update-resolv-conf
			down /etc/openvpn/update-resolv-conf

			script-security 2
			up /usr/bin/update-systemd-resolved
			down /usr/bin/update-systemd-resolved
			down-pre
			dhcp-option DOMAIN-ROUTE .
			```
		2. `systemctl enable --now systemd-resolved.service`
		3. `pamac install openvpn-update-systemd-resolved openvpn-update-resolv-conf-git` (may need to manually clone #1 due to permissiosn errors?)
46. `dd if=... bs=16M | xz -z -9 -M 80% -v | ssh ... "dd of=... bs=16M"`
	1.  `ssh ... "dd if=... bs=16M" | xz -d -M 80% -v | dd of=... bs=16M`
47. wihotspot channel must be the same as current connected channel on interface.
48. Sunshine with NVIDIA on Linux:
	1.  <https://www.azdanov.dev/articles/2025/how-to-create-a-virtual-display-for-sunshine-on-arch-linux>.
	2.  Double check settings in `/etc/X11/xorg.conf.d/`.
	3.  `/etc/modprobe.d/blacklist.conf`.
	4.  Black SDDM fix: clear out `/etc/X11`. SHould only be 00 and 30 left. No software mouse.
		1.  Can use software mouse fix. Keep Driver empty.
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
49. cmus now requires opusfile?
50. `sunshine-bin` requires manual patching of `libicu*.76`.
51. PVE gilgamesh-44 may not work well with SATA port 2. Using port 6 for now.
	1.  Maybe disable VMD?
52. <https://forum.manjaro.org/t/xdg-open-throws-filed-to-register-with-host-portal-error/183762/5>.
53. <https://unix.stackexchange.com/questions/91620/efi-variables-are-not-supported-on-this-system>.
	1.  `sudo grub-install && sudo update-grub && sudo mkinitcpio -P && sudo grub-install && sudo update-grub && sudo swapon /swapfile`
	2.  `syncthing vim opusfile`
54. <https://www.maketecheasier.com/wayland-work-with-nvidia-graphics-cards/> for proper `vainfo`.
55. On `gilgamesh-44`, for some reason, Wayland NVIDIA acceleration only works with an *additional* EDID plugged in. I have provided said EDID. This means that our supposed EDID probably needs modification or is invalid in some way.
	1.  This DOES work, however. I’ve tried switching things around naively but it is not so trivial.
56. Hibernate still broken on 44. EFI boot required?
57. <https://www.linuxbabe.com/desktop-linux/boot-from-iso-files-using-grub2-boot-loader>.
58. Working on 43 GPU passthrough: <https://forum.proxmox.com/threads/gpu-passthrough-on-proxmox-ve-macos-monterey-part-04x04.140579/page-2>.
