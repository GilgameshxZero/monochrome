#NoTrayIcon
SendMode Input
pen := 1

<#F20::
if WinActive("ahk_exe ONENOTE.EXE")
	Send !%pen%
	pen := Mod(pen, 3) + 1
	return

; Prevent CTRL stick.
<#F19::
	Send {Ctrl down}
	Sleep 20
	Send z
	Sleep 20
	Send {Ctrl up}
	return
