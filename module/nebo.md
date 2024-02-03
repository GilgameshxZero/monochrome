# `nebo`

Nebo is the preferred way to take notes on Windows. Data is stored in `%USERPROFILE%\AppData\Local\Packages\VisionObjects.MyScriptNebo_1rjv6qr7skr92\LocalState\db` and symlinked to `monochrome/nebo` which is managed by `syncthing`.

## Database file breakdown

`dms.db` itself stores the relationship between all the object files in `dat`. The `.nebo` files in `dat` do not contain locale data, but can be opened as archives with `7zip` to modify the locale to `en_US`, after which they can be imported into Nebo as expected.

Previously, while importing the raw `.nebo` files from `dat`, there were many empty pages that were generated. The cause of this is unknown.
