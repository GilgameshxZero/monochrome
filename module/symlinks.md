# `symlinks`

Symlinks avoid replication and unnecessary copying and are an integral part of maintaining the sync-config structure of `monochrome`..

## Procedure

Internal symlinks are tracked via `monochrome/config/syncthing/main.stignore`. Beyond that, The following symlinks should also be created:


Target|Link|Notes
-|-|-
`~/main.syncthing/snowfall/local.syncthing`|`~/Downloads`|
`~/main.syncthing/monochrome/libraries`|`~/AppData/Roaming/Microsoft/Windows/Libraries`|Windows-only syncing of libraries for File Explorer.

### Windows

```batch
mklink /J Link Target
```

### Linux

```bash
ln -s Target Link
```

It may be necessary to use absolute paths in some cases.
