# `email`

`neomutt` is the preferred IMAP client on POSIX systems. There is no equivalent on Windows.

We are in the process of setting up a local IMAP/maildir process. For now, a local maildir system is mirrored with Gmail IMAP. This is done with the following loop system.

1. Envelopes sent to all aliases *except* a Gmail address are forwarded to the `gilgamesh.cc` SMTP server.
2. The `gilgamesh.cc` SMTP server forwards all messages (except those arriving at a special address) to the Gmail address
3. The Gmail address forwards these messages to this special `gilgamesh.cc` address.
4. This special address receives messages into an INBOX `maildir`.
5. All `maildir`s are synced via `syncthing`.

## Archive

`mbox` archive is broken into `maildir` directly in `neomutt` via tag all and save. For archival purposes, `tar --sort=name` might help as it can collate similar messages from the `mbox` archive from Gmail, and thus increase compression efficiency non-trivially (e.g. 4GB off an originally 18GB archive). Similarly, increase `xz` dictionary size with `--lzma2=dict=1GiB`.

## Bugs

`neomutt` does not cache emails with 0 contents. It should, though. I should make an issue here: <https://github.com/neomutt/neomutt/issues>.
