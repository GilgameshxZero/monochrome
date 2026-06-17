# `vcard`

We use a directory of single `VCARD`/`vcf` files to store contacts. Each contact is assigned a UID. Contacts may be accessed via `khard` on Unix and `Fossify Contacts` on Android.

A concatenated `vcard` file is provided at `monochrome/module/vcard.vcf`. This is generated automatically via `cat vcard/* > vcard.vcf`. The concatenated format is useful for compatibility.
