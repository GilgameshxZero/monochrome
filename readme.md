# `monochrome`

`monochrome` stores system-related configuration files, setup files, and syncable app data.

Applications binaries themselves should not be stored in non-local `monochrome`—the only binaries allowed are standalone scripts.

Archive `monochrome` may store application binaries, if they are difficult to obtain online. Otherwise, a setup script should be provided instead.

Machines are configured by manually configuration certain `modules`. See the `machines` directory for details.
