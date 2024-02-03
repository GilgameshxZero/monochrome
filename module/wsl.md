# Windows Subsystem for Linux

WSL is not commonly used, but can enable Unix tools natively on Windows, which may be helpful for imagemagick usage.

## Installation

This guide is based on <https://docs.microsoft.com/en-us/windows/wsl/install-win10>.

Under Administrator Powershell:

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

Run the update package from <https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi>.
Then set the default version:

```batch
wsl --set-default-version 2
```

# Required packages

```bash
sudo apt update
sudo apt install make gdb g++ clang-12
sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/clang-12 121
```
