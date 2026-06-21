# Windows

## Quick access

Startup folder is at `%userprofile%\AppData\Romaing\Microsoft\Windows\Start Menu\Programs` or `shell:startup`.

## Settings

The following settings are worth manually adjusting:

1. UAC
2. Updates
3. Night light
4. Notifications
5. Power & sleep
6. Additional power settings
7. Battery saver
8. Taskbar & icons
9. Theme
10. Multitasking
11. Touchpad
12. Language options
  1. Disable Ctrl+Alt for language switching.
13. Regional settings
14. Animation effects
15. Start menu
16. High contrast mode
17. Appearance and performance
  1. All off except for font-smoothing and thumbnails.

## Optional features

1. Wireless Display

## Additional customizations

1. Disable web search: <https://www.reddit.com/r/LinusTechTips/comments/1ahub6n/disabling_web_search_completely_fixes_windows/>.
2. ThrottleStop and AltServer icons may duplicate in the system tray: <https://www.techpowerup.com/forums/threads/windows-11-new-throttlestop-9-6-icon-added-to-other-system-tray-icons-each-reboot.311589/>. This is a Windows 11 bug. The only fix right now is to clear the system tray icons periodically <https://answers.microsoft.com/en-us/windows/forum/all/how-to-delete-duplicate-system-tray-icon-list-from/8790797a-ccb2-43d8-bacb-a5bfc3d7e399>.
3. Disable Widgets: <https://lazyadmin.nl/win-11/disable-widgets-windows-11/>.
4. To disable Defender, manually turn off protection policies from the control panel. Utilizing more forceful methods may cause problems in future Windows updates.
  1. Maybe use this first <https://answers.microsoft.com/en-us/windows/forum/all/access-is-denied-in-task-manager/9986f100-a733-4bb1-8dea-0286ac99c144> to prevent it from resetting.
  2. Microsoft Defender Antivirus: apply reg fix from <https://www.tenforums.com/tutorials/5918-how-turn-off-microsoft-defender-antivirus-windows-10-a.html>.
5. Disable Windows Updates via Group Policy (Disabled).

## Notes

1. Windows can be upgraded in place under secure boot and TPM bypass via the ISO. Run `setup.exe /product server` and do not download updates until complete.
2. Default wallpapers are here: <C:\Windows\Web\Wallpaper\Windows>.

## Bugs

1. <https://superuser.com/questions/1448054/choose-which-adapter-to-use-for-mobile-hotspot-on-windows-10>.
2. <https://forum.proxmox.com/threads/about-idle-cpu-utilization-on-windows-11.133987/>.
