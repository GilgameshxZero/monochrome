# `monochrome`

`monochrome` stores system-related configuration files, setup files, and syncable app data.

`monochrome` itself is synced via Syncthing, whose config is stored within `monochrome`. As with the typical `syncthing` setup, files within `monochrome` are divided into three sets:

1. `local`
2. `active`
3. `archive`

It shall be the case that `{active}` and `{active, archive}` both form valid file sets for system operation.

Folder names shall be singularized if possible.

This repository is provided to the public with the intent to share insights about system configuration. However, care must be taken to not share any sensitive data.

## Modules and machines

A module denotes a single unit of system configuration. A machine configuration consists of a set of modules.

Machine types are classified by their underlying operating system, and preferred use case in `{client, server}`.

## Binaries

As light machines with only the `active` fileset must also be able to operate certain binaries, it is the case that certain binaries must be stored in `active`. This further avoids necessary duplication to `local`.

Recall that `{local, active, archive}/bin` is placed on the PATH. Any apps which do not need PATH access shall be placed in `*/app`.

## Deprecation

Configurations for older machines, older themes, and previously-used apps shall be placed into `archive`.

## Recovery

Recovery retains critical information and authentication details for disaster recovery.
