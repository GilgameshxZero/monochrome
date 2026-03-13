```bash
su --mount-master -c "mount --rbind /mnt/user/0/2DCA-1E91/main.syncthing/prototype /mnt/user/0/emulated/0/main.syncthing/prototype"
su --mount-master -c "mount --rbind /mnt/user/0/2DCA-1E91/main.syncthing/origin /mnt/user/0/emulated/0/main.syncthing/origin"
su --mount-master -c "mount --rbind /mnt/user/0/2DCA-1E91/main.syncthing/snowfall /mnt/user/0/emulated/0/main.syncthing/snowfall"

su -c "umount /mnt/user/0/emulated/0/main.syncthing/prototype"
su -c "umount /mnt/user/0/emulated/0/main.syncthing/origin"
su -c "umount /mnt/user/0/emulated/0/main.syncthing/snowfall"

toybox vi
```

1. <https://stackoverflow.com/questions/23280804/how-to-move-spcific-apps-to-from-sd-card-using-adb>.
2. <https://android.stackexchange.com/questions/194651/why-bind-mounts-in-storage-emulated-0-are-not-visible-in-apps>.
