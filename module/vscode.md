# `vscode`

Visual Studio Code is used for general development and creative writing.

## Installation

### Windows

Obtain the *system* x64 installer from <https://code.visualstudio.com/download>.

### Linux

On Arch, use the proprietary branded release `visual-studio-code-bin` on the AUR to ensure availabilitiy of sync and extensions.

## Configuration

Sync settings with the Github account `GilgameshxZero`. A copy of the settings and keybinds is available at `monochrome/config/vscode`, but this is not regularly updated.

### Windows

On Windows, to enable Visual Studio developer tools such as `cl.exe` and `nmake`, we must load `vcvarsall.bat` before loading VS Code. We do this via a shortcut to a batch file. The shortcut target is as follows:


```batch
"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsall.bat" x64 10.0.22000.0 && hide "cmd /C code"
```

Two copies of this shortcut, for `x64` and `x86` targets, are available in `monochrome/config/vscode`. This assumes a default-path Visual Studio install.

These shortcuts may be added to the taskbar, but not to Start.
