#!/bin/bash
sudo cp `sudo find /var/lib/docker -size +32G -name gilgamesh-36.img | head -1` .
