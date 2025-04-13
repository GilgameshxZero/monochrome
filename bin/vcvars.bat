@ECHO OFF
@REM Injects typical vcvarsall into a VSCode environment, useful for remote debugging on Windows.
CALL "C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvarsall.bat" x64 10.0.22000.0
