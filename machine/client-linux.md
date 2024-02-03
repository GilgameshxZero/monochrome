* `vim`
* `qbittorrent`
* `noto-fonts-emoji`: emoji font support.
* `xorg-xmodmaps`: en/emdash, curly quotes.
* `vlc`
* `microsoft-edge-stable-bin` (AUR)
* `visual-studio-code-bin` (AUR)
* `ibus`
  * `ibus-pinyin`
  * Add the `pinyin` IME.
  * Increase font-size to 14.
  * autostart with `ibus-daemon -drxR`
  * In `/etc/environment`:
  	```
  	GTK_IM_MODULE=ibus
		QT_IM_MODULE=ibus
		XMODIFIERS=@im=ibus
		```
  * Unicode code point: `<Alt>+u` to work with typography hotkeys later.
* `pyenv`.
* `tmux`.
* Yakuake w/ F8.
* (deprecated) Keychron K2: <https://schnouki.net/post/2019/how-to-use-a-keychron-k2-usb-keyboard-on-linux/>.
  * `options hid_apple fnmode=2 swap_opt_cmd=1` in `/etc/modprobe.d/hid_apple.conf`.
* Want `2` here: `/sys/module/hid_apple/parameters/fnmode`.
  * Reload with `modprobe -r hid_apple` then `modprobe hid_apple`.
* `path`: `export PATH=$PATH:/home/gilgamesh/main/active/monochrome/bin`.
* Settings > Shortcuts > KWin > Switch One Desktop *: Defaults.
* `typography` fonts.
  * `typography.khotkeys`
* `ssh` client setup by importing keys in `ssh`.
  * `cp ssh /* ~/.ssh`
  * `chmod 600 ~/.ssh/id_rsa`
  * Server.
    * `sudo code -r /etc/ssh/sshd_config`.
    * Check configuration options in `sshd.md`.
      * `PasswordAuthentication no`.
    * `sudo systemctl enable sshd.service` then `sudo systemctl start sshd.service`.
* Slow bluetooth connection fix: `/etc/whatever/bluetooth/main.conf` there is a fast connect setting. Turn it on. Restart bluetooth with `sudo systemctl restart bluetooth`.

Restart kwin with `kwin_x11 --replace & disown` if Meta key fails to open Application Launcher: <https://unix.stackexchange.com/questions/520388/how-to-fix-meta-key-not-always-working-to-trigger-start-menu-on-kde>.

Zoom scaling fix: <https://www.reddit.com/r/Zoom/comments/hat5af/linux_client_ui_elements_too_large_after_update/?utm_source=BD&utm_medium=Search&utm_name=Bing&utm_content=PSR1>.

Signatures: <https://wiki.manjaro.org/index.php/Pacman_troubleshooting#Errors_about_Keys>, <https://archived.forum.manjaro.org/t/error-signature-from-is-unknown-trust/106687/8>.

---

* * `fcitx5`
  * `fcitx5-configtool`
  * `fcitx5-chinese-addons`
  * `fcitx5-gtk`
  * `fcitx5-qt`
  * In `/etc/environment`:
  	```
  	GTK_IM_MODULE=fcitx
		QT_IM_MODULE=fcitx
		XMODIFIERS=@im=fcitx
		```
  * Add the Pinyin input method, NOT the Keyboard - Chinese one.
  * Super+Space to switch input methods.
  * Share Input State: All.

---

TP LINK MU MIMO: <https://community.tp-link.com/en/home/forum/topic/208022> or package `rtl88x2bu-dkms-git` (hasn't worked).
