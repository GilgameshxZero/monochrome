# gilgamesh-37

Surface Pro 7 Windows client
i5-1035G4 | 8GB RAM | 128GB SSD | 512GB SD
Windows 11+ Pro

## Modifications

### SD card driver

The generic SD card driver is preferred to avoid periodic disconnects: <https://www.reddit.com/r/Surface/comments/f2nq01/do_you_have_sd_card_random_disconnect/>.

### Camera

The camera freezes after some usage, and isn’t of great quality in general. We can avoid this problem by using `camo`. There is scant documentation for this and it’s not clear how to fix it.

### Thermal management & Throttlestop

Thermal hibernation/shutdown typically sees this Kernel-Power (41) event in the Event Viewer:

```
The system was hibernated due to a critical thermal event.
Hibernate Time = ‎2023‎-‎07‎-‎04T20:54:46.487091100Z             
ACPI Thermal Zone = Intel(R) Dynamic Tuning: SEN9             
_HOT = 329K
```

This can be avoided by installing a bogus driver for SEN9, one of the components in Device Manager > System devices > Intel(R) Dynamic Tuning Participant. While this raises the thermal threshold before shutdown, there is a second thermal shutdown trigger which leaves the filesystem in a dirty state. This may corrupt files and even the operating system, so it is critical that those types of unmanaged shutdowns are managed.

We have found through experimentation that 12W is a safe PL1 limit, and 24W can be achieved with a standard USB-powered fan mount on the back, while 28W may be maintained with a ~20W USB-C fan mount. See the Throttlestop configurations for more details.
