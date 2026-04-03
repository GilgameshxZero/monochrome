# gilgamesh-51

Linux client daily driver
Intel Core Ultra 258V | 32GB RAM | 1TB SSD
Manjaro Linux 25.0.1
3HM5WYU-ADML4GQ-HFARHWR-5JWFRNB-G3CCGEU-YOFNHCV-PJQ2CHU-XAK66QI

## `iio` sensors

`/sys/bus/iio/devices/`:

0. prox
1. dev_rotation
2. gyro_3d
3. accel_3d
4. geomagnetic_orientation
5. magn_3d
6. gravity
7. relative_orientation
8. hinge

Disable by blacklisting `intel_ish_ipc`.

## `mpv` on `tty`

```bash
mpv --vo=drm --drm-connector=DP-1 ...
mpv --vo=gpu-next --drm-connector=eDP-1 --gpu-context=drm ...
```

## Cursor shape in `curses` applications

```bash
infocmp linux-m | sed 's/cnorm=[^,]*/cnorm=\\E[?25h\\E[?112c/' | tic -
```
