# `ec_pin`

`ec_pin` is a utility which pins an Embedded Controller register to a certain value by writing to it continuously every few seconds. It is built for Windows as part of the `utulek` experiments.

Pinning a specific register can force a fan profile on the _HP Omnibook Ultra Flip 14_. We note that pinning register `0x2d` forces the following behavior based on the value:

1. `0x22`: Default, adaptive fan profile.
2. `0x55`: Cool, loud profile. Fans spin up early.
3. `0x88`: Silent profile. Fans spin up late and their max speed is reduced. Running a heavy application under this profile may hibernate the computer if thermal limits are reached.

These values were deduced by monitoring the EC registers whilean HP fan application was running. The specific application used for monitoring and adjusting fan profiles is not documented here.

Shortcuts are provided in `module/ec_pin/` to pin the register to each of these respective values, or quit the application.

## POSIX

On POSIX, we do not need to pin continuously, likely because Windows has some background process which resets pinned registers.

Instead, we enable write on the EC registers, and write once:

```bash
sudo modprobe ec_sys write_support=1
echo -n -e "\x88" | sudo dd of="/sys/kernel/debug/ec/ec0/io" bs=1 seek=45 count=1 conv=notrunc
```
