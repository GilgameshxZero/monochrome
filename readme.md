# `monochrome`

`monochrome` stores system-related configuration files, setup files, and syncable app data.

## Top-level directories

1. `app`: pure app binaries, acquired online, excluded from version control, but included in sync.
2. `bin`: scripts available on the PATH, and some proxy redirects to access `app/*` on the PATH.
3. `machine`: configuration files for systems.
4. `module`: configuration files for apps.
