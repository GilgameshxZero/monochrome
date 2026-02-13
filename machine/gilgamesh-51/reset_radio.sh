#!/usr/bin/env bash
sleep 0.1
sudo modprobe -r btintel_pcie
sudo modprobe -r iwlmld
sudo modprobe -r iwlwifi
sleep 0.1
sudo modprobe iwlwifi
sudo modprobe iwlmld
sudo modprobe btintel_pcie
