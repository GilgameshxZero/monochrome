# `visual-studio`

The Visual Studio Build Tools are required for the `cl.exe` and `nmake` utilities on Windows. Obtain the Community-edition installer from <https://visualstudio.microsoft.com/downloads> and install the following components:

1. MSVC v143
2. Just-In-Time Debugger
3. Windows 11 SDK (10.0.22000.0)
4. ASAN
5. Image and 3D model editors

The Visual Studio IDE itself should be used for ad-hoc `.obj` model viewing as well as Windows-API application development.

## Configuration

Visual Studio configuration is synced with the Microsoft account `0@gilgamesh.cc`. The window layout is `default`.

In the event that sync fails, configuration has been exported to `monochrome/module/visual-studio/settings.vssettings`.
