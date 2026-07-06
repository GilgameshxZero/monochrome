# `neomutt`

`neomutt` is the preferred IMAP client on POSIX systems. There is no equivalent on Windows.

`neomutt` does not cache emails with 0 contents. It should, though. I should make an issue here: <https://github.com/neomutt/neomutt/issues>.

`mbox` archive is broken into `maildir` directly in `neomutt` via tag all and save. For archival purposes, `tar --sort=name` might help as it can collate similar messages from the `mbox` archive from Gmail, and thus increase compression efficiency non-trivially (e.g. 4GB off an originally 18GB archive). Similarly, increase `xz` dictionary size with `--lzma2=dict=1GiB`.
