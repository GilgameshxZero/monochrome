#!/bin/bash
# Copy volume with installed MacOS into a separate file. We can then move that file to anywhere, and will run the system off of that file in the future.
sudo cp `sudo find /var/lib/docker -size +10G -name mac_hdd_ng.img | head -1` ./gilgamesh-36.img
