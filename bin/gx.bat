@ECHO OFF
SETLOCAL
SET args_all=%*
CALL SET args_rem=%%args_all:*%1=%%
CALL "%~dp0/../module/gx/%1" %args_rem%
ENDLOCAL
