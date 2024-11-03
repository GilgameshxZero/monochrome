# `client-linux`

Linux clients are not preferred, but have been used in the past. There are a few fixes to enable multi-lingual output as well as compatibility for `typography`, but generally things are more easier to automate.

Generally Manjaro/Arch is the preferred choice of OS.

## Modules

1. `syncthing`
2. `env-vars`
3. `symlinks`
4. `vscode`
5. `git`
6. `ssh`

## Packages

`vim qbittorrent tmux htop screenfetch`

### UI packages

Most of the following packages are designed around Manjaro.

* `noto-fonts-emoji`: emoji font support.
* `xorg-xmodmaps`: en/emdash, curly quotes.
* `vlc`.
* `visual-studio-code-bin` (AUR).
* Yakuake w/ F8.
* (deprecated) Keychron K2: <https://schnouki.net/post/2019/how-to-use-a-keychron-k2-usb-keyboard-on-linux/>.
  * `options hid_apple fnmode=2 swap_opt_cmd=1` in `/etc/modprobe.d/hid_apple.conf`.
* Want `2` here: `/sys/module/hid_apple/parameters/fnmode`.
  * Reload with `modprobe -r hid_apple` then `modprobe hid_apple`.
* `path`: `export PATH=$PATH:/home/gilgamesh/main/active/monochrome/bin`.
* Settings > Shortcuts > KWin > Switch One Desktop *: Defaults.
* `typography.khotkeys`

## Input method: `ibus` and `fcitx`

I forgot which one works better. Try `fctix` first I guess, or look it up?

### `ibus`

#### Packages

* `ibus-pinyin`

#### Steps

1. Add the `pinyin` IME.
2. Increase font-size to 14.
3. autostart with `ibus-daemon -drxR`
4. In `/etc/environment`:
  ```
  GTK_IM_MODULE=ibus
  QT_IM_MODULE=ibus
  XMODIFIERS=@im=ibus
  ```
5. Unicode code point: `<Alt>+u` to work with typography hotkeys later.

### `fcitx`

#### Packages

* `fcitx5`
* `fcitx5-configtool`
* `fcitx5-chinese-addons`
* `fcitx5-gtk`
* `fcitx5-qt`

#### Steps

1. In `/etc/environment`:
  ```
  GTK_IM_MODULE=fcitx
  QT_IM_MODULE=fcitx
  XMODIFIERS=@im=fcitx
  ```
2. Add the Pinyin input method, NOT the Keyboard - Chinese one.
3. Super+Space to switch input methods.
4. Share Input State: All.

## Fixes

### Slow bluetooth connection

`/etc/whatever/bluetooth/main.conf` there is a fast connect setting. Turn it on. Restart bluetooth with `sudo systemctl restart bluetooth`.

### Failing Meta/Win key

Restart kwin with `kwin_x11 --replace & disown` if Meta key fails to open Application Launcher: <https://unix.stackexchange.com/questions/520388/how-to-fix-meta-key-not-always-working-to-trigger-start-menu-on-kde>.

### Zoom client scaling

<https://www.reddit.com/r/Zoom/comments/hat5af/linux_client_ui_elements_too_large_after_update/?utm_source=BD&utm_medium=Search&utm_name=Bing&utm_content=PSR1>.


### Package manager unrecognized signatures

<https://wiki.manjaro.org/index.php/Pacman_troubleshooting#Errors_about_Keys>, <https://archived.forum.manjaro.org/t/error-signature-from-is-unknown-trust/106687/8>.

### TP-Link USB Wi-Fi adapter

<https://community.tp-link.com/en/home/forum/topic/208022> or package `rtl88x2bu-dkms-git` (hasn't worked).
