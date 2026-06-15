# `rolo`

`rolo` is the preferred editor for VCARD files on Unix.

The following packages are needed to use `rolo`:

1. <https://aur.archlinux.org/packages/libvc>.
2. <https://aur.archlinux.org/packages/rolo>.

`rolo` is also used in `neomutt` via `mutt_vc_query`. I have since forgotten how this is installed.

`person/contacts.vcf` is the source VCARD file for all contact management. It can be symlinked to the `rolo` default directory, or loaded with `rolo -f`.

```bash
ln -s /home/gilgamesh/main.syncthing/monochrome/module/person /home/gilgamesh/.rolo
```
