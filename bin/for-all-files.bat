@ECHO OFF
@REM Do %* for all files in current directory.
CALL :SUBPROCESS %*
GOTO :EOF

:SUBPROCESS
@REM Pass in a command to do on all files.
FOR %%f IN (*) DO CALL %* %%f
FOR /D %%d IN (*) DO (
    CD %%d
    CALL :SUBPROCESS
    CD ..
)
EXIT /b
