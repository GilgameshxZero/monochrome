# `dopamine`

Dopamine 2.0.9 (<https://github.com/digimezzo/dopamine-windows>) is the preferred audio player on Windows. To enable live playlist updating, we symlink `%USERPROFILE%\Music\Dopamine\Playlists` to `%USERPROFILE%\main.syncthing\prototype\playlists`. Luckily, these are the same nesting level, and so all `m3u` playlists within `prototype/playlists` should be composed with the prefix

```m3u
../../../main.syncthing/prototype/playlists
```

This integration will continue to work on other platforms, as long as the `main.syncthing` root structure is preserved.

Dopamine v3 was attempted, but seemed to lack support for easy playlist import.
