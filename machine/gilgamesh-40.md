# gilgamesh-40

Self-hosted Proxmox
AMD 5950X | NVIDIA GTX 1080 Ti, NVIDIA GTX 1070, AMD Radeon RX 550 4GB | 32+32+32+32GB DDR4 RAM | 500GB SSD | 8TB HDD
Proxmox VE 6.8.12-9
N/A

## GPU

### Passthrough (GTX 1080 Ti, RX 550)

The GPU is configured to be used via PCI passthrough: <https://pve.proxmox.com/wiki/PCI_Passthrough>. It may also be configured with a vGPU driver to be shared, but this comes with quirks.

### vGPU (GTX 1070)

General setup guide: <https://gitlab.com/polloloco/vgpu-proxmox>.
Additional setup guide: <https://wvthoog.nl/proxmox-vgpu-v3/#Linux>.

vGPU client and server drivers are available here:

1. <https://cloud.google.com/compute/docs/gpus/grid-drivers-table>
	1. On linux, needs the headers. Install `sudo pacman -S linux-headers-meta`.
2. <https://mega.nz/file/RvsyyBaB#7fe_caaJkBHYC6rgFKtiZdZKkAvp7GNjCSa8ufzkG20>

### `nvidia_pl`, `nvidia_pstate`

`nvidia_pl` and `nvidia_pstate` are provided to manage the vGPU power state.

The relevant `libnvidia-api` is extracted from the GRID guest drivers at <https://docs.cloud.google.com/compute/docs/gpus/grid-drivers-table#current_linux_vws_drivers>:

```bash
curl -O https://storage.googleapis.com/nvidia-drivers-us-public/GRID/vGPU19.3/NVIDIA-Linux-x86_64-580.105.08-grid.run
```

It is then patched according to the instructions in <https://github.com/sasha0552/nvidia-pstated>.

### Linux client patching (Arch)

We use the 580.*.* driver versions which are pre-patched for the GTX 1070.

Previously, we tried patching the 535.*.* drivers for the GTX 1080 ti, but something went wrong. It wasn’t necessary for the basic setup, anyway.

Follow this trail.

1. <https://bbs.archlinux.org/viewtopic.php?id=298655&p=2>.

Kernel 6.12. Manually applied patches to 535.216.01 but did not get super far. Failed DKMS on all available kernels. Some other patch is needed? Lots of `-grid` substitutions, a sha512 substitution.

### Licensing

A license server runs on `gilgamesh-44` and is necessary to unlock framerates for a computer that runs for longer than 15 minutes. The relevant query URL for the client token is based on the `gilgamesh-40` internal `dnsmasq` NAT:

```bash
curl.exe --insecure -L -X GET https://10.8.40.44:7070/-/client-token -o "C:\Program Files\NVIDIA Corporation\vGPU Licensing\ClientConfigToken\client_configuration_token_$($(Get-Date).tostring('dd-MM-yy-hh-mm-ss')).tok"
```

Make sure to double-check your timezone. The SHA1 GPO edit is probably not needed and may cause connectivity issues (RDP & Parsec, but Sunshine still works). Should you make this edit, it is recommended to revert virtual display setups beforehand so that the display is still accessible via the Proxmox interface, if not over internet.

### Memory configurations

Memory may not be shared by vGPU clients. Instead, `/etc/vgpu_unlock/profile_override.toml` should be configured. See module files for more information.

### Debugging

Try different driver blacklist configurations via `/etc/modprobe.d/blacklist.conf` in case of any trouble.

## `zenpower`

`zenpower` is used for `sensors`-based monitoring of computing resources. It may need a patch to function, available in `ZEN3-test4,patch`.

## `dnsmasq`

`dnsmasq` is used, like on all Proxmox instances, to create an internal NAT. The NAT addressing format is derived from the `OpenVPN`/`vpn` module NAT addressing format, with `10.8.x.y` being the address for `gilgamesh-y` on the NAT of `gilgamesh-x`.

We provide the following configs:

1. `/etc/network/interfaces`.
2. `/etc/dnsmasq.d/static-ips.conf`.

## Kernel parameters, SSD disconnect

1. <https://bbs.archlinux.org/viewtopic.php?id=297365>.

Check with `cat /sys/module/nvme_core/parameters/default_ps_max_latency_us`.
