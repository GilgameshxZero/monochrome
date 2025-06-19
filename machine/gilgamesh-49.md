# gilgamesh-49

Windows client running on `gilgamesh-40`
AMD 5950X | 16GB RAM | 1TB
Windows 11
6DTQYIJ-46XINR6-NDOF7BO-MLBECAZ-BEEOITV-2WZZDVB-C7VB376-LIHT3A2

## Fan control

Via `ec-probe`, I have determined the following:

1. Fan write register: `0x2D`.
	1. `0x00`: performance.
	2. `0x11`.
	3. `0x22`: balanced.
	4. `0x33`.
	5. `0x44`: “half quiet”.
	6. `0x55`: cool.
	7. `0x66`: power saver.
	8. `0x77`: smart sense.
	9. `0x88`: quiet.
	10. `0x99`.
2. Fan read registers: `0x2E`, `0x2F`, `0x35`, `0x36`.
	1. `0x00`: max/undefined.
	2. `0x2A`: fast.
	3. `0x4F`: slow.
	4. `0xFF`: very slow or off.
