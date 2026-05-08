# `vscode`

Visual Studio Code is used for general development and creative writing. We prefer the VSCodium fork for its widespread platform availability and open source nature.

## Configuration

Keybindings and settings are provided in `module/vscode/`.

A custom fork of `open-remote-ssh` is provided which correctly detects Windows remotes. We are in the process of getting this merged.

### Windows

On Windows, to use `nmake`, VSCode must be launched within the Visual Studio Developer Console. To do this, we provide shortcuts in `module/vscode/` which initialize the developer console variables before launching VSCodium.
