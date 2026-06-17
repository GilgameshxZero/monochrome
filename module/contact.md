# `vcard`

We use a directory of single `VCARD`/`vcf` files to store contacts. Each contact is assigned a UID. Contacts may be accessed via `khard` on Unix and `Fossify Contacts` on Android.

A concatenated `vcard` file is provided at `monochrome/module/contact/contacts.vcf`. This is generated automatically via `cat khard/* > contacts.vcf`. The concatenated format is useful for compatibility.

```bash
ln -s ~/main.syncthing/monochrome/module/contact/khard ~/.contacts/default
```
