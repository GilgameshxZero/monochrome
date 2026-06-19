1. <https://forum.proxmox.com/threads/amd-bsod-unsupported-processor-since-windows-build-26100-4202-update-kb5060842-its-preview-kb5058499.166828/page-3>.
2. <https://dortania.github.io/OpenCore-Post-Install/universal/iservices.html#customer-code-error>
3.  Hotspot adapter solution: <https://superuser.com/questions/1448054/choose-which-adapter-to-use-for-mobile-hotspot-on-windows-10>.
4.  <https://forum.proxmox.com/threads/about-idle-cpu-utilization-on-windows-11.133987/>.
5.  `nct6775`.
6.  `intel-media-driver` on Linux for iGPU video decode.
7.  Disable HAGS/P7 helps with Moonlight stuttering.
8.  <https://www.reddit.com/r/GeForceNOW/comments/ynznkj/linux_users_can_now_enable_hardware_acceleration/> (doesn't work). (works on Wayland?) (check nvtop, edge://media-internals).
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
9.  Only large cursors show on Linux host sunshine: <https://github.com/LizardByte/Sunshine/issues/93#issuecomment-3033636224>. Fix: <https://github.com/LizardByte/Sunshine/issues/93#issuecomment-1377858388>.
10. Moonlight stream to linux host isn’t glitchy after switching to software decode. For some reason this just works on Android, though I assume its using hardware decode.
	1.  For client, install `intel-media-driver`.
	2.  Forcing software HEVC on host also works.
11. Self-signed certificates: <https://wiki.archlinux.org/title/Chromium#SSL_certificates>.
	1.  Doesn't work for sunshine because of bad CN in cert.
12. Windows SSH agent is broken with Codium SSH.
13. <https://xdaforums.com/t/solved-unable-to-locate-grub-on-android-x86.4522735/>.
14. Sunshine with NVIDIA on Linux:
	1.  <https://www.azdanov.dev/articles/2025/how-to-create-a-virtual-display-for-sunshine-on-arch-linux>.
	2.  Double check settings in `/etc/X11/xorg.conf.d/`.
	3.  `/etc/modprobe.d/blacklist.conf`.
	4.  Black SDDM fix: clear out `/etc/X11`. Should only be 00 and 30 left. No software mouse.
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
15. <https://forum.manjaro.org/t/xdg-open-throws-filed-to-register-with-host-portal-error/183762/5>.
16. <https://unix.stackexchange.com/questions/91620/efi-variables-are-not-supported-on-this-system>.
	1.  `sudo grub-install && sudo update-grub && sudo mkinitcpio -P && sudo grub-install && sudo update-grub && sudo swapon /swapfile`
17. <https://www.maketecheasier.com/wayland-work-with-nvidia-graphics-cards/> for proper `vainfo`.
18. <https://www.linuxbabe.com/desktop-linux/boot-from-iso-files-using-grub2-boot-loader>.
19. `gilgamesh-54`: <https://wiki.debian.org/WiFi/HowToUse#wpasupplicant>. <https://github.com/ThomasRives/Proxmox-over-wifi>.
	1. `KillMode=process` for `ifreset`.
	2. <https://forum.proxmox.com/threads/remove-or-reset-cluster-configuration.114260/>.
	3. <https://forum.proxmox.com/threads/proxmox-over-wifi-wlan.123805/>.
	4. <https://stackoverflow.com/questions/18123211/checking-host-availability-by-using-ping-in-bash-scripts>.
	5. <https://github.com/linux-surface/linux-surface/wiki/Installation-and-Setup#arch>.
	6. <https://www.reddit.com/r/Proxmox/comments/vj6u54/is_it_possible_to_shrink_storage_disk_i_want_to/>.
	7. <https://www.reddit.com/r/Proxmox/comments/10spjwj/easiest_way_to_mount_usb_drive_proxmox_7/>.
20. `sudo dd if=/dev/sda bs=64M | pv | pigz -9 | ssh root@192.168.50.40 "dd of=/mnt/pve/sdb/template/iso/gilgamesh-52.20260418.gz.iso bs=64M"`
