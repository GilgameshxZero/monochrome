# `symlinks`

Symlinks avoid replication and unnecessary copying and are an integral part of maintaining the sync-config structure of `monochrome`.

We prefer to not have internal symlinks inside `main.syncthing` as they are not fully supported outside of Windows.

## Configuration

Real|Fake|Notes
-|-|-
`~/main.syncthing/snowfall/local.syncthing`|`~/Downloads`|
`~/main.syncthing/monochrome/module/windows-library`|`~/AppData/Roaming/Microsoft/Windows/Libraries`|Windows-only syncing of libraries for File Explorer.
`~/main.syncthing/monochrome/module/ssh`|`~/.ssh`|
