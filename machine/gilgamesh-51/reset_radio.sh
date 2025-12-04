#!/usr/bin/env bash
sleep 5
sudo modprobe -r btintel_pcie
sudo modprobe -r iwlmld
sudo modprobe -r iwlwifi
sleep 1
sudo modprobe iwlwifi
sudo modprobe iwlmld
sudo modprobe btintel_pcie
