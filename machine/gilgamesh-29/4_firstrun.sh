#!/bin/bash
# We use custom arguments for memory and cores for fine-tuned control.
# To change these, remove the existing docker container and run this once, before delegating to the service.
source ./gilgamesh-36.serial.sh
# WIDTH/HEIGHT from the serial file.
sudo docker run -i \
    --name gilgamesh-36 \
    --privileged \
    --device /dev/kvm \
    -v "${PWD}/../../local.syncthing/machine/gilgamesh-36/gilgamesh-36.img:/image" \
    -p 61036:5936 \
    -e TERMS_OF_USE=i_agree \
    -e NOPICKER=true \
    -e GENERATE_SPECIFIC=true \
    -e DEVICE_MODEL="${DEVICE_MODEL}" \
    -e SERIAL="${SERIAL}" \
    -e BOARD_SERIAL="${BOARD_SERIAL}" \
    -e UUID="${UUID}" \
    -e MAC_ADDRESS="${MAC_ADDRESS}" \
    -e "DISPLAY=${DISPLAY:-:0.0}" \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -e WIDTH="${WIDTH}" \
    -e HEIGHT="${HEIGHT}" \
    -e EXTRA="-display none -vnc 0.0.0.0:36 -smp 6,cores=2,threads=1,sockets=3 -m 4096" \
    sickcodes/docker-osx:naked
