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
