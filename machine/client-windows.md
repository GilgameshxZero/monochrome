# Windows client setup

## Modules

1. `syncthing`
2. `env-vars`
3. `symlinks`
4. `visual-studio`
5. `vscode`
6. `git`
7. `typography`
8. `ssh`
9. `throttlestop`
10. `vpn`
11. `bin`
12. k-lite

### Optional

1. 7zip
2. `qbittorrent`
3. `mp3tag`
4. `nebo`
5. kb-as-mouse
6. libre-hardware-monitor
7. mp3gain
8. freac
9. scrcpy
10. bypass-paywalls
11. handbrake
12. gesturesign
13. aquile
14. obs
15. camo
16. wechat
17. discord
18. altserver
19. treesize
20. tor
21. zoom
22. csp
23. parsec
24. wsl-2
25. powertoys

### Other

1. cru
2. crystal-disk-mark
3. dell-fan-mgmt
4. rufus
5. sai2
6. surface-pen
7. pomotodo
8. yumi
9. tap-windows
10. hevc
11. mbox-viewer
12. vnc-viewer
13. cmder
14. autologon

## Settings

### Quick access

1. Startup folder is at `%userprofile%\AppData\Romaing\Microsoft\Windows\Start Menu\Programs` or `shell:startup`.

### Windows settings

* UAC
* Updates
* Night light
* Notifications
* Power & sleep
* Additional power settings
* Battery saver
* Taskbar & icons
* Theme
* Multitasking
* Touchpad
* Language options (disable Ctrl+Alt for language switching)
* Regional settings
* Animation effects
* Start menu
* High contrast mode
* Appearance and performance (only font-smoothing and thumnails instead of icons).

### Optional features

* Wireless Display

## Additional customizations

1. Disable web search: <https://www.reddit.com/r/LinusTechTips/comments/1ahub6n/disabling_web_search_completely_fixes_windows/>.
2. ThrottleStop and AltServer icons may duplicate in the system tray: <https://www.techpowerup.com/forums/threads/windows-11-new-throttlestop-9-6-icon-added-to-other-system-tray-icons-each-reboot.311589/>. This is a Windows 11 bug. The only fix right now is to clear the system tray icons periodically <https://answers.microsoft.com/en-us/windows/forum/all/how-to-delete-duplicate-system-tray-icon-list-from/8790797a-ccb2-43d8-bacb-a5bfc3d7e399>.
3. Disable Widgets: <https://lazyadmin.nl/win-11/disable-widgets-windows-11/>.
4. To disable Defender, manually turn off protection policies from the control panel. Utilizing more forceful methods may cause problems in future Windows updates.
   1. Maybe use this first <https://answers.microsoft.com/en-us/windows/forum/all/access-is-denied-in-task-manager/9986f100-a733-4bb1-8dea-0286ac99c144> to prevent it from resetting.

## Notes

1. Groove music/media player plays the first file relatively fast, but all following files are preceded with a long delay in the app which renders it unusable. Restoring an old version of Groove does not fix this issue, though this issue did not exist in the past.
   1. Use `dopamine` instead.
2. Windows can be upgraded in place under secure boot and TPM bypass via the ISO. Run `setup.exe /product server` and do not download updates until complete.
