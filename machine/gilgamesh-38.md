# gilgamesh-38

"Client" Windows 11 QEMU on `gilgamesh-29`.
AMD fF-6120 Six-Core (2/6) | 8GB RAM | 512GB HDD
Windows 11 Pro
LIQFW2Z-HJJ3HLK-OM2LWJ6-O4WAV5X-6JPVY54-5OSAHQ3-DTDQ75X-XRK6EAH

## Approach

<https://macroform-node.medium.com/building-a-windows-11-vm-with-qemu-using-tpm-emulation-for-research-malware-analysis-part-1-8846378b9582> for a template of instructions to run. The `swtpm` bypass mentioned here no longer works ind is not necessary.

<https://www.tomshardware.com/how-to/bypass-windows-11-tpm-requirement> to bypass TMP requirement.

<https://askubuntu.com/questions/54814/how-can-i-ctrl-alt-f-to-get-to-a-tty-in-a-qemu-session> to send hotkeys to QEMU to enable previous bypass.

Initial setup must be done with a display connected. The TPM bypass via `swtpm` no longer works, so we use the one provided in the second article, at install-time.

(Prefer to use the second command below.)

```bash
qemu-img create -f qcow2 gilgamesh-38.qcow2 1024G;

sudo qemu-system-x86_64 -cdrom /home/gilgamesh/main.syncthing/monochrome/local.syncthing/machine/gilgamesh-38/Win11.iso -cpu host -enable-kvm -m 8192 -smp 6 -device intel-hda -device hda-duplex -usb -nic user,ipv6=off,model=rtl8139,mac=84:1b:77:c9:03:a6 -bios /usr/share/ovmf/x64/OVMF.fd -drive file=gilgamesh-38.qcow2,format=qcow2
```

Subsequent startups can be configured to be headless, as long as RDP is tunneled beforehand.

```bash
qemu-system-x86_64 \
-smp 6 \
-m 8192 \
-cpu host \
-vga virtio \
-serial mon:stdio \
-display none \
-enable-kvm \
-device intel-hda \
-device hda-duplex \
-usb \
-device e1000,netdev=net0 \
-netdev user,id=net0,hostfwd=tcp::61038-:3389,hostfwd=udp::61038-:3389 \
-bios /usr/share/ovmf/x64/OVMF.fd \
-drive file=/home/gilgamesh/main.syncthing/monochrome/local.syncthing/machine/gilgamesh-38/gilgamesh-38.qcow2,format=qcow2
```

This is implemented as `gilgamesh-38.qemu` on the host `gilgamesh-29`.

VirtIO drivers should be installed for proper Parsec display usage: <https://pve.proxmox.com/wiki/Windows_VirtIO_Drivers>. Parsec is buggy regardless and for now 1024x768 is our best supported 4;3 resolution. Lag is significant due to no vGPU passthrough and a slow CPU without an iGPU.
