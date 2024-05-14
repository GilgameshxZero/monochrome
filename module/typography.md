# `typography`

Preferred typography practices are enabled by various hotkeys, inspired by MacOS hotkeys.

1. `Alt+Shift+-: —`
2. `Alt+-: –`
3. `Alt+;: …`
4. `Alt+]: ‘`
5. `Alt+Shift+]: ’`
6. `Alt+[: “`
7. `Alt+Shift+[: ”`

## Configuration

### Windows

We have provided an AHK-built app at `monochrome/archive.syncthing/apps/typography.exe` which enables the above hotkey. Copy the app to `monochrome/local.syncthing/apps` and enable autostart by copying `monochrome/config/typography/typography.lnk` to `%USERPROFILE%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`.

### Linux

On KDE, `typography.khotkeys` enables the above hotkeys, but can be somewhat buggy when the keys are pressed and released in a fast sequence.

## Fonts

In addition, the `EB Garamond` font should be installed system-wide. The font files are available in `monochrome/config/typography`. The Adobe-style Garamond is actually preferred, but licensing is difficult to navigate.
