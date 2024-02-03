@echo off
CALL :subprocess %*
GOTO :eof

:subprocess
REM Pass in a command to do on all files.
FOR %%f IN (*) DO CALL %* %%f
FOR /D %%d IN (*) DO (
    CD %%d
    CALL :subprocess
    CD ..
)
EXIT /b
