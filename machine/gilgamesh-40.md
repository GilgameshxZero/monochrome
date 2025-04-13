# gilgamesh-40

Self-hosted Proxmox
AMD 5950X | Nvidia GTX 1080 Ti | 32+32+8+8GB DDR4 RAM | 500GB SSD | 8TB HDD
Proxmox VE 6.8.12-9
N/A

The GPU is configured to be used via PCI passthrough: <https://pve.proxmox.com/wiki/PCI_Passthrough>. It may also be configured with a vGPU driver to be shared, but this comes with quirks.

## vGPU setup

General setup guide: <https://gitlab.com/polloloco/vgpu-proxmox>.
Additional setup guide: <https://wvthoog.nl/proxmox-vgpu-v3/#Linux>.

vGPU client and server drivers are available here:

1. <https://cloud.google.com/compute/docs/gpus/grid-drivers-table>
2. <https://mega.nz/file/RvsyyBaB#7fe_caaJkBHYC6rgFKtiZdZKkAvp7GNjCSa8ufzkG20>

### Licensing

A license server runs on `gilgamesh-44` and is necessary to unlock framerates for a computer that runs for longer than 15 minutes. The relevant query URL for the client token is:

```bash
curl.exe --insecure -L -X GET https://192.168.50.44:7070/-/client-token -o "C:\Program Files\NVIDIA Corporation\vGPU Licensing\ClientConfigToken\client_configuration_token_$($(Get-Date).tostring('dd-MM-yy-hh-mm-ss')).tok"
```

Make sure to double-check your timezone. The SHA1 GPO edit is probably not needed and may cause connectivity issues (RDP & Parsec, but Sunshine still works). Should you make this edit, it is recommended to revert virtual display setups beforehand so that the display is still accessible via the Proxmox interface, if not over internet.

### Memory configurations

Memory may not be shared by vGPU clients. Instead, `profile_overrides.toml` should be configured. See module files for more information.

### Debugging

Try different driver blacklist configurations via `/etc/modprobe.d/blacklist.conf` in case of any trouble.
