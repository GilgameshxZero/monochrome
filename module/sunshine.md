# sunshine

For the `2026.05` version of `sunshine-bin` on the AUR, the user `systemd` service is not created automatically. We provide service files here instead. Link them into `~/.config/systemd/user`.

## Moonlight

Moonlight on certain versions of Android (`gilgamesh-34`) fails to select the proper resolution depending on video decoder capabilities. We provide a custom build of the APK with custom resolutions under the module.

### Resolution configurations

Configurations under `moonlight-WIDTH-HEIGHT.*` are provided to be run upon connection to adjust the virtual display to the right resolution.

### EDIDs

Custom EDIDs are provided that either clone or allow a range of custom resolutions and refresh rates for different client connections.

### Root vs user service

User service will require some auto-logon-like script. We still prefer this for the most part.

## Bugs

1. May require manual patching of `libicu*.76`.
