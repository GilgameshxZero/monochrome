# `syncthing`

`syncthing` is used to maintain file parity between multiple clients. Syncthing should not be installed on single-purpose devices. While it is mostly a transparent process, re-configuration is time consuming and should be avoided, or the number of devices be kept to a minimum.

One folder is used to accomplish this, with optional ignore configurations based on the type of device.

1. `main.syncthing` (`ifzzk-usnva`): should be synced to `~/main.syncthing`.

## Binary

The binary can be obtained from <https://syncthing.net/downloads> and shall be placed in `monochrome/local.syncthing/app`.

## Ignore configuration

Ignore configurations are synced in `*.stignore` files. Generally, for devices with at least 256GB storage, we would like to sync the entire folder:

```stignore
#include monochrome/module/syncthing/main.stignore
```

For devices with less storage, we also ignore archives, which generally don’t need to be accessed more than once every 6 months:

```stignore
// This order is preferred so that `archive.stignore` may overwrite certain `main.stignore` rules.
#include monochrome/module/syncthing/main.stignore
#include monochrome/module/syncthing/archive.stignore
```

The local ignore configuration is located at `.stignore`, but is not synced by syncthing. Utilize `monochrome/module/syncthing/initialize.stignore` to sync the `*.stignore` files first, before setting `.stignore`.

## Autostart

Syncthing should be an autostart program.

### Windows

With the `syncthing.exe` binary placed in `monochrome/local.syncthing/app`, autostart can be achieved by copying the shortcut `monochrome/module/syncthing/syncthing.lnk` to the startup folder `%userprofile%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup` (otherwise accessible as `shell:startup`).

The shortcut is a standard shorcut with target parameters `-no-browser -no-console` appended.


### Linux

```
sudo systemctl enable syncthing
sudo systemctl start syncthing
```

## Configuration

Three settings shall be adjusted for the default folder from the `syncthing` web interface (Actions > Advanced > Defaults > Default Folder):

1. Junctions as Dirs: `true`. Ensures that symlinks of the `syncthing` folder are followed on Windows systems. This also follows internal symlinks—but internal symlinks should be disabled manually via `main.stignore`.
2. Max Conflicts: `0`. Ensures that conflict files do not get saved—as usually only the most recent file is needed.
3. Order: `oldestFirst`. Ensures that changes are synced in order—useful for when later changes, such as to `.stignore` file, depend on earlier changes.

### Windows

The configuration files are located at`%userprofile%\AppData\Local\Syncthing` but should not be synced directly—they include device-specific keys which may not function when synced over.
