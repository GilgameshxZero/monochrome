# `throttlestop`

## Installation

Download the latest version of Throttlestop from <https://www.techpowerup.com/download/techpowerup-throttlestop> and extract to `monochrome/local.syncthing/app`.

## Virtualization and undervolting

Throttlestop is a utility on Windows for undervolting + overclocking and unlocking power/Wattage limits. On Windows 10, it works on most configurations, but Windows 11 requires that virtualization features in BIOS be disabled for undervolting settings to work. Power limits may still be unlocked with virtualization enabled.

Virtualization allows both Docker and WSL2 to be enabled, via Hyper-V + other optional Windows features. Docker is an easy way to enable OSX dev on Windows.

## Configuration

Existing Throttlestop configurations are replicated per-machine in `monochrome/config/throttlestop` periodically.

## Usage

All power limits are specified for both the CPU and iGPU, combined.

1. Options > Default Profiles: load different profiles for AC vs battery.
2. Options > Miscellaneous > PROCHOT Offset: set to 0 to minimize PROCHOT signalling, which reduces CPU frequency drastically.
3. Standard > Speed Shift EPP: set to 0 for maximum performance, 255 for minimum. A “balanced” profile lands around 86.
4. Standard > SpeedStep: inferior to Speed Shfit. Disable.
5. Standard > BD PROCHOT: uncheck to disable PROCHOT, but may cause unexpected shutdowns triggered by hardware overheating.
6. TPL > Power Limit Controls > Sync MMIO: leave checked to sync the power limits to a separate set of limits within the CPU.
7. TPL > Power Limit Controls > PL1: long-term power limit. Should be set higher for systems with more capable cooling.
8. TPL > Power Limit Controls > PL2: short-term power limit for “burst” workloads. Will be maintained for a duration computed from Turbo Time Limit and the delta between PL1 and PL2.
9. TPL > Power Limit Controls > Clamp: enable.
10. TPL > Miscellaneous > Power Limit 4: set t0 to disable. Otherwise, specifies the absolute upper limit of power draw from the CPU which shall not be exceeded.
11. TPL > Miscellaneous > Power Balance: upon hitting one of the power limits, these two numbers determine the relative power allocated between the CPU vs iGPU.
12. FIVR: for undervolting. Test thoroughly to ensure stability, especially when transitioning between AC & battery.

## Autostart

Autostart on Windows for Throttlestop must be configured via the Task Scheduler, to run when user is logged on. A sample task is exported in `monochrome/config/throttlestop` if needed.
