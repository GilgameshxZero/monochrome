# gilgamesh-38

"Client" Windows 11 QEMU on `gilgamesh-29`.
AMD fF-6120 Six-Core (2/6) | 8GB RAM | 512GB HDD
Windows 11 Pro

## Approach

<https://macroform-node.medium.com/building-a-windows-11-vm-with-qemu-using-tpm-emulation-for-research-malware-analysis-part-1-8846378b9582> for a template of instructions to run. The `swtpm` bypass mentioned here no longer works ind is not necessary.

<https://www.tomshardware.com/how-to/bypass-windows-11-tpm-requirement> to bypass TMP requirement.

<https://askubuntu.com/questions/54814/how-can-i-ctrl-alt-f-to-get-to-a-tty-in-a-qemu-session> to send hotkeys to QEMU to enable previous bypass.

Initial setup must be done with a display connected. The TPM bypass via `swtpm` no longer works, so we use the one provided in the second article, at install-time.

```bash
sudo qemu-system-x86_64 -cdrom /home/gilgamesh/main.syncthing/monochrome/local.syncthing/config/gilgamesh-38/Win11.iso -cpu Skylake-Client-v3 -enable-kvm -m 8192 -smp 6 -device intel-hda -device hda-duplex -usb -nic user,ipv6=off,model=rtl8139,mac=84:1b:77:c9:03:a6 -bios /usr/share/ovmf/x64/OVMF.fd -drive file=gilgamesh-38.qcow2,format=qcow2
```

Subsequent startups can be configured to be headless, as long as RDP is tunneled beforehand.

```bash
sudo su
while true; do qemu-system-x86_64 -nographic -m 8192 -smp 6 -vga virtio -cpu Skylake-Client-v3 -enable-kvm -device intel-hda -device hda-duplex -usb -nic user,ipv6=off,model=rtl8139,mac=84:1b:77:c9:03:a6 -bios /usr/share/ovmf/x64/OVMF.fd -drive file=/home/gilgamesh/main.syncthing/monochrome/local.syncthing/config/gilgamesh-38/gilgamesh-38.qcow2,format=qcow2; done
```