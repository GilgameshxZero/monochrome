#!/bin/bash
mkdir .tmp
cd .tmp
wget https://raw.githubusercontent.com/sickcodes/Docker-OSX/master/custom/generate-unique-machine-values.sh
# Manual fix for a URL.
sed -i "s/https:\/\/gitlab.com\/wireshark\/wireshark\/-\/raw\/master\/manuf/https:\/\/www.wireshark.org\/download\/automated\/data\/manuf/g" generate-unique-machine-values.sh
chmod +x generate-unique-machine-values.sh
./generate-unique-machine-values.sh --count 1 --output-env ../gilgamesh-36.serial.sh
cd ..
rm -rf .tmp
