@ECHO OFF
@REM Runs scrcpy to mirror screen from Android device. Recommended to run with `--no-audio` if using an Onyx Boox device.
CALL %~dp0/../app/scrcpy-win64-v3.3.4/scrcpy.exe %*
