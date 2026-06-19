# Browser

Active passwords are available in `monochrome/module/browser/browser.password.csv`, and deleted, inactive, or decommissioned account credentials are in `monochrome/module/browser/browser-archive.password.csv`.

## Chromium

Hardware acceleration on Linux can be finnicky. Check <chrome://media-internals> to verify. On modern Wayland platforms, it seems to work OOB.

Self-signed certificates: <https://wiki.archlinux.org/title/Chromium#SSL_certificates>.
	1.  Doesn't work for sunshine because of bad CN in cert.

## Firefox

```about:config
browser.closeWindowWithLastTab=false
```
