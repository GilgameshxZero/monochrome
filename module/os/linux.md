# Linux

Most current configurations are on Manjaro, but we plan to Migrate to Debian for new setups.

1. Keyboard configuration can be modified by configuring `hid_apple`:
   ```bash
	 echo 2 > /sys/module/hid_apple/parameters/fnmode
	 modprobe -r hid_apple
	 modprobe hid_apple
	 ```

## Bugs

1. `intel-media-driver` on Linux for iGPU video decode.
2. <https://www.reddit.com/r/kde/comments/u4chnl/constant_cpu_usage_when_sddmgreeter_is_idle/>.
