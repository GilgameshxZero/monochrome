# `vcard`

We use a directory of single `VCARD`/`vcf` files to store contacts. Each contact is assigned a UID. Contacts may be accessed via `khard` on Unix and `Fossify Contacts` on Android.

A concatenated `vcard` file is provided at `monochrome/module/contact/contacts.vcf`. This is generated automatically via `cat khard/* > contacts.vcf`. The concatenated format is useful for compatibility.

The configuration file specifies the contacts directory, so there is no need to further symlink.

```bash
ln -s ~/main.syncthing/monochrome/module/contact/khard.conf ~/.config/khard/khard.conf
```

A raw `vcf` can be edited by piping the output of `khard file`:

```bash
vim `khard file yangawesome`
```
