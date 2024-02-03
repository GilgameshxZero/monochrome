# gilgamesh-36

Server MacOS Catalina QEMU on `gilgamesh-29`.
AMD FX-6120 Six-Core (one core) | 3GB RAM | 64GB HDD
MacOS Catalina

## Configuration

Previously attempted approaches with little success:

1. <https://github.com/quickemu-project/quickemu>
2. <https://github.com/foxlet/macOS-Simple-KVM/blob/master/docs/guide-screen-resolution.md>

Current approach: <>.

### Serial number

Generation of a valid serial number is required to enable proper iMessage integration with the Apple server. Without it, the iMessage server will eventually fail to send messages, but will continue receiving them.

## AirMessage

`gilgamesh-36` runs an AirMessage server for the `yang@gilgamesh.cc` Google account, accessible via <https://web.airmessage.org>.

## Autostart

`gilgamesh-36` is configured to auto-login (<https://support.apple.com/en-us/102316>) and autostart AirMessage and iMessage on startup.
