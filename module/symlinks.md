# `symlinks`

Symlinks avoid replication and unnecessary copying and are an integral part of maintaining the sync-config structure of `monochrome`.

## Procedure

Internal symlinks are tracked via `monochrome/config/syncthing/main.stignore`. Beyond that, The following symlinks should also be created:

Real|Fake|Notes
-|-|-
`~/main.syncthing/snowfall/local.syncthing`|`~/Downloads`|
`~/main.syncthing/monochrome/libraries`|`~/AppData/Roaming/Microsoft/Windows/Libraries`|Windows-only syncing of libraries for File Explorer.
`~/main.syncthing/monochrome/config/ssh`|`~/.ssh`|

### Windows

```batch
mklink /J Fake Real
```

```batch
mklink /J %USERPROFILE%\main.syncthing\altair\silver %USERPROFILE%\main.syncthing\silver
mklink /J %USERPROFILE%\main.syncthing\alto\silver %USERPROFILE%\main.syncthing\silver
mklink /J %USERPROFILE%\main.syncthing\cygnus\silver %USERPROFILE%\main.syncthing\silver
mklink /J %USERPROFILE%\main.syncthing\emilia\echidna\silver %USERPROFILE%\main.syncthing\silver
mklink /J %USERPROFILE%\main.syncthing\imperial\silver %USERPROFILE%\main.syncthing\silver
mklink /J %USERPROFILE%\main.syncthing\southstar\silver %USERPROFILE%\main.syncthing\silver
mklink /J %USERPROFILE%\main.syncthing\sviva\silver %USERPROFILE%\main.syncthing\silver
mklink /J %USERPROFILE%\main.syncthing\sylph\silver %USERPROFILE%\main.syncthing\silver
mklink /J %USERPROFILE%\main.syncthing\utulek\silver %USERPROFILE%\main.syncthing\silver
mklink /J %USERPROFILE%\main.syncthing\altair\rain %USERPROFILE%\main.syncthing\rain
mklink /J %USERPROFILE%\main.syncthing\emilia\rain %USERPROFILE%\main.syncthing\rain
mklink /J %USERPROFILE%\main.syncthing\utulek\rain %USERPROFILE%\main.syncthing\rain
mklink /J %USERPROFILE%\main.syncthing\emilia\echidna\snapshots\altair %USERPROFILE%\main.syncthing\altair
mklink /J %USERPROFILE%\main.syncthing\emilia\echidna\snapshots\cygnus %USERPROFILE%\main.syncthing\cygnus
mklink /J %USERPROFILE%\main.syncthing\emilia\echidna\snapshots\utulek %USERPROFILE%\main.syncthing\utulek
```

```bash
ln -s $HOME/main.syncthing/silver $HOME/main.syncthing/altair/silver
ln -s $HOME/main.syncthing/silver $HOME/main.syncthing/alto/silver
ln -s $HOME/main.syncthing/silver $HOME/main.syncthing/cygnus/silver
ln -s $HOME/main.syncthing/silver $HOME/main.syncthing/emilia/echidna/silver
ln -s $HOME/main.syncthing/silver $HOME/main.syncthing/imperial/silver
ln -s $HOME/main.syncthing/silver $HOME/main.syncthing/southstar/silver
ln -s $HOME/main.syncthing/silver $HOME/main.syncthing/sviva/silver
ln -s $HOME/main.syncthing/silver $HOME/main.syncthing/sylph/silver
ln -s $HOME/main.syncthing/silver $HOME/main.syncthing/utulek/silver
ln -s $HOME/main.syncthing/rain $HOME/main.syncthing/altair/rain
ln -s $HOME/main.syncthing/rain $HOME/main.syncthing/emilia/rain
ln -s $HOME/main.syncthing/rain $HOME/main.syncthing/utulek/rain
ln -s $HOME/main.syncthing/altair $HOME/main.syncthing/emilia/echidna/snapshots/altair
ln -s $HOME/main.syncthing/cygnus $HOME/main.syncthing/emilia/echidna/snapshots/cygnus
ln -s $HOME/main.syncthing/utulek $HOME/main.syncthing/emilia/echidna/snapshots/utulek
```

### Linux

```bash
ln -s Real Fake
```

It may be necessary to use absolute paths in some cases.
