# `monochrome`

`monochrome` stores system-related configuration files, setup files, and syncable app data.

## Top-level directories

1. `app`: pure app binaries, acquired online, excluded from version control, but included in sync.
2. `bin`: scripts available on the PATH, and some proxy redirects to access `app/*` on the PATH.
3. `machine`: configuration files for systems.
4. `module`: configuration files for apps.
5. `password`: top-level backup codes, passwords, and seed phrases which do not fit in `module/browser/browser.password.csv`.
6. `theme`: configuration files for system theming.

## Theme

Under KDE, wallpapers must be configured in 3 locations:

1. Screen Locking.
2. Wallpaper.
3. Login Screen (SDDM).
