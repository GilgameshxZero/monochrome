# `gilgamesh-57`

Mudita Kompakt daily driver
Quad-core MediaTek MT6761V/WBA | 3GB LPDDR3 | 32GB + 64GB
Android 12
BOKBYBJ-7Q6Q7QJ-L62MJCU-7VDM6KY-AAUHINB-EVW56CV-XNVYE3M-I6MLWQU

## Startup scripts

Bind non-encrypted bulk storage to the SD card:

```bash
su --mount-master -c "mount --rbind /mnt/user/0/2DCA-1E91/main.syncthing/prototype /mnt/user/0/emulated/0/main.syncthing/prototype"
su --mount-master -c "mount --rbind /mnt/user/0/2DCA-1E91/main.syncthing/origin /mnt/user/0/emulated/0/main.syncthing/origin"
su --mount-master -c "mount --rbind /mnt/user/0/2DCA-1E91/main.syncthing/snowfall /mnt/user/0/emulated/0/main.syncthing/snowfall"
```

To reverse:

```bash
su -c "umount /mnt/user/0/emulated/0/main.syncthing/prototype"
su -c "umount /mnt/user/0/emulated/0/main.syncthing/origin"
su -c "umount /mnt/user/0/emulated/0/main.syncthing/snowfall"
```

Reference:

1. <https://stackoverflow.com/questions/23280804/how-to-move-spcific-apps-to-from-sd-card-using-adb>.
2. <https://android.stackexchange.com/questions/194651/why-bind-mounts-in-storage-emulated-0-are-not-visible-in-apps>.

## `vi`

```
toybox vi
```
