# gilgamesh-36

Server MacOS Catalina QEMU on `gilgamesh-29`.
AMD FX-6120 Six-Core (1/6) | 2GB RAM | 64GB HDD
MacOS Catalina

## Configuration

Previously attempted approaches with little success:

1. <https://github.com/quickemu-project/quickemu>
2. <https://github.com/foxlet/macOS-Simple-KVM/blob/master/docs/guide-screen-resolution.md>

Current approach: <https://github.com/sickcodes/Docker-OSX>.

The Docker container contains the boot/run options. The image contains the actual persistent system. To modify boot/run options, recreate the container.

A VNC port is opened on `127.0.0.1:61036`, which can be forwarded (but requires additional auth before doing so).

Resources are intentionally limited for `gilgamesh-36`.

### Serial number

Generation of a valid serial number is required to enable proper iMessage integration with the Apple server. Without it, the iMessage server will eventually fail to send messages, but will continue receiving them.

## AirMessage

`gilgamesh-36` runs an AirMessage server for the `yang@gilgamesh.cc` Google account, accessible via <https://web.airmessage.org>.

Text Message Forwarding needs to be enabled on the iPhone, otherwise SMS won’t work (only iMessage). iMessage may also require finalging with serials to work.

## Autostart

`gilgamesh-36` is configured to auto-login (<https://support.apple.com/en-us/102316>) and autostart AirMessage and iMessage on startup.
