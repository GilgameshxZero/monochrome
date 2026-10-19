#!/system/bin/sh

# Wait for locations to become available.
sleep 120

su --mount-master -c "mount --rbind /mnt/user/0/2DCA-1E91/main.syncthing/prototype /mnt/user/0/emulated/0/main.syncthing/prototype"
su --mount-master -c "mount --rbind /mnt/user/0/2DCA-1E91/main.syncthing/origin /mnt/user/0/emulated/0/main.syncthing/origin"
su --mount-master -c "mount --rbind /mnt/user/0/2DCA-1E91/main.syncthing/snowfall /mnt/user/0/emulated/0/main.syncthing/snowfall"

# Autostart some apps.
monkey -p com.google.android.calendar 1
monkey -p org.fossify.clock 1
monkey -p eu.faircode.email 1
monkey -p org.mozilla.fennec_fdroid 1
monkey -p com.foobar2000.foobar2000 1
monkey -p com.google.android.inputmethod.latin 1
monkey -p com.google.android.gm 1
monkey -p io.github.sds100.keymapper 1
monkey -p com.kompaktx.app 1
monkey -p de.blinkt.openvpn 1
monkey -p com.github.catfriend1.syncthingfork 1

am start -c android.intent.category.HOME -a android.intent.action.MAIN
