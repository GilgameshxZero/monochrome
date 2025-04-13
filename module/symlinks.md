# `symlinks`

Symlinks avoid replication and unnecessary copying and are an integral part of maintaining the sync-config structure of `monochrome`.

## Procedure

Internal symlinks are tracked via `monochrome/module/syncthing/main.stignore`. Beyond that, The following symlinks should also be created:

Real|Fake|Notes
-|-|-
`~/main.syncthing/snowfall/local.syncthing`|`~/Downloads`|
`~/main.syncthing/monochrome/library`|`~/AppData/Roaming/Microsoft/Windows/Libraries`|Windows-only syncing of libraries for File Explorer.
`~/main.syncthing/monochrome/module/ssh`|`~/.ssh`|

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

### Linux

We prefer not to use `ln -s` filesystem symlinks as they are not followed correctly by `git`. We may use `mount --rbind` but this requires `sudo` permissions and some deletion effects may be unexpected.

```bash
mkdir Fake
sudo mount --rbind Real Fake
```

We prefer `sudo mount --rbind` as `git` traverses this without trouble.

```bash
rm /home/gilgamesh/main.syncthing/altair/silver
mkdir /home/gilgamesh/main.syncthing/altair/silver
sudo mount --rbind /home/gilgamesh/main.syncthing/silver /home/gilgamesh/main.syncthing/altair/silver
rm /home/gilgamesh/main.syncthing/alto/silver
mkdir /home/gilgamesh/main.syncthing/alto/silver
sudo mount --rbind /home/gilgamesh/main.syncthing/silver /home/gilgamesh/main.syncthing/alto/silver
rm /home/gilgamesh/main.syncthing/cygnus/silver
mkdir /home/gilgamesh/main.syncthing/cygnus/silver
sudo mount --rbind /home/gilgamesh/main.syncthing/silver /home/gilgamesh/main.syncthing/cygnus/silver
rm /home/gilgamesh/main.syncthing/emilia/echidna/silver
mkdir /home/gilgamesh/main.syncthing/emilia/echidna/silver
sudo mount --rbind /home/gilgamesh/main.syncthing/silver /home/gilgamesh/main.syncthing/emilia/echidna/silver
rm /home/gilgamesh/main.syncthing/imperial/silver
mkdir /home/gilgamesh/main.syncthing/imperial/silver
sudo mount --rbind /home/gilgamesh/main.syncthing/silver /home/gilgamesh/main.syncthing/imperial/silver
rm /home/gilgamesh/main.syncthing/southstar/silver
mkdir /home/gilgamesh/main.syncthing/southstar/silver
sudo mount --rbind /home/gilgamesh/main.syncthing/silver /home/gilgamesh/main.syncthing/southstar/silver
rm /home/gilgamesh/main.syncthing/sviva/silver
mkdir /home/gilgamesh/main.syncthing/sviva/silver
sudo mount --rbind /home/gilgamesh/main.syncthing/silver /home/gilgamesh/main.syncthing/sviva/silver
rm /home/gilgamesh/main.syncthing/sylph/silver
mkdir /home/gilgamesh/main.syncthing/sylph/silver
sudo mount --rbind /home/gilgamesh/main.syncthing/silver /home/gilgamesh/main.syncthing/sylph/silver
rm /home/gilgamesh/main.syncthing/utulek/silver
mkdir /home/gilgamesh/main.syncthing/utulek/silver
sudo mount --rbind /home/gilgamesh/main.syncthing/silver /home/gilgamesh/main.syncthing/utulek/silver
rm /home/gilgamesh/main.syncthing/altair/rain
mkdir /home/gilgamesh/main.syncthing/altair/rain
sudo mount --rbind /home/gilgamesh/main.syncthing/rain /home/gilgamesh/main.syncthing/altair/rain
rm /home/gilgamesh/main.syncthing/emilia/rain
mkdir /home/gilgamesh/main.syncthing/emilia/rain
sudo mount --rbind /home/gilgamesh/main.syncthing/rain /home/gilgamesh/main.syncthing/emilia/rain
rm /home/gilgamesh/main.syncthing/utulek/rain
mkdir /home/gilgamesh/main.syncthing/utulek/rain
sudo mount --rbind /home/gilgamesh/main.syncthing/rain /home/gilgamesh/main.syncthing/utulek/rain
rm /home/gilgamesh/main.syncthing/emilia/echidna/snapshots/altair
mkdir /home/gilgamesh/main.syncthing/emilia/echidna/snapshots/altair
sudo mount --rbind /home/gilgamesh/main.syncthing/altair /home/gilgamesh/main.syncthing/emilia/echidna/snapshots/altair
rm /home/gilgamesh/main.syncthing/emilia/echidna/snapshots/cygnus
mkdir /home/gilgamesh/main.syncthing/emilia/echidna/snapshots/cygnus
sudo mount --rbind /home/gilgamesh/main.syncthing/cygnus /home/gilgamesh/main.syncthing/emilia/echidna/snapshots/cygnus
rm /home/gilgamesh/main.syncthing/emilia/echidna/snapshots/utulek
mkdir /home/gilgamesh/main.syncthing/emilia/echidna/snapshots/utulek
sudo mount --rbind /home/gilgamesh/main.syncthing/utulek /home/gilgamesh/main.syncthing/emilia/echidna/snapshots/utulek
```

It may be necessary to use absolute paths in some cases.
