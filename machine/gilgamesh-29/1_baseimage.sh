#!/bin/bash
# After this step, connect on VNC port 5999 and monitor the install.

# Boot the macOS Base System (Press Enter)
# Click Disk Utility
# Erase the BIGGEST disk (around 200gb default), DO NOT MODIFY THE SMALLER DISKS. -- if you can't click erase, you may need to reduce the disk size by 1kb
# (optional) Create a partition using the unused space to house the OS and your files if you want to limit the capacity. (For Xcode 12 partition at least 60gb.)
# Click Reinstall macOS
# The system may require multiple reboots during installation

docker run -it \
    --device /dev/kvm \
    # -p 50922:10022 \
    -p 60136:5999 \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -e "DISPLAY=${DISPLAY:-:0.0}" \
    -e GENERATE_UNIQUE=true \
    -e MASTER_PLIST_URL='https://raw.githubusercontent.com/sickcodes/osx-serial-generator/master/config-custom.plist' \
    -e EXTRA="-display none -vnc 0.0.0.0:99 -smp 6,cores=2,threads=1,sockets=3 -m 8192" \
    -e WIDTH=880 \
    -e HEIGHT=660 \
    sickcodes/docker-osx:ventura
    
# docker run -it \
#     --device /dev/kvm \
#     -p 50922:10022 \
#     -p 5999:5999 \
#     -v /tmp/.X11-unix:/tmp/.X11-unix \
#     -e "DISPLAY=${DISPLAY:-:0.0}" \
#     -e EXTRA="-display none -vnc 0.0.0.0:99 -smp 6,cores=2,threads=1,sockets=3 -m 8192" \
#     -e WIDTH=880 \
#     -e HEIGHT=660 \
#     sickcodes/docker-osx:latest
