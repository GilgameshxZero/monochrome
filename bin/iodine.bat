@ECHO OFF
@REM Experimental script for use to adjust routes for `iodine` DNS tunneling.

START iodinec -f -P "1#GXVeMc" 159.65.224.199 iodine.gilgamesh.cc
@REM Do I need the IP here? Probably...
ECHO "Press any key to continue, once the other window has stalled..."
PAUSE > nul
FOR /f "tokens=2,3 delims={,}" %%a IN ('"WMIC NICConfig where IPEnabled="True" get DefaultIPGateway /value | C:\Windows\System32\find.exe "I" "') DO SET "DEFAULT_GATEWAY_IPV4=%%~a"
ECHO %DEFAULT_GATEWAY_IPV4%

@REM Temporary override.
SET "DEFAULT_GATEWAY_IPV4=10.192.63.1"

@REM Run in a loop, maybe.
@REM I think we’re very close. Need to read up documentation on ROUTE.
ROUTE DELETE 0.0.0.0 MASK 0.0.0.0 %DEFAULT_GATEWAY_IPV4%
ROUTE ADD 159.65.224.199 %DEFAULT_GATEWAY_IPV4% METRIC 60
ROUTE CHANGE 159.65.224.199 %DEFAULT_GATEWAY_IPV4% METRIC 60
ROUTE ADD 0.0.0.0 MASK 0.0.0.0 %DEFAULT_GATEWAY_IPV4% METRIC 40
ROUTE CHANGE 0.0.0.0 MASK 0.0.0.0 %DEFAULT_GATEWAY_IPV4% METRIC 40

@REM Can get in with ssh root@192.168.99.1 and browsh for online help.

@REM

@REM ROUTE ADD 0.0.0.0 MASK 0.0.0.0 0.0.0.0 METRIC 300 IF 45
@REM ROUTE DELETE 0.0.0.0 MASK 0.0.0.0 0.0.0.0 IF 45

@REM ROUTE ADD 192.168.99.1 %DEFAULT_GATEWAY_IPV4% METRIC 40
@REM ROUTE DELETE 0.0.0.0 MASK 0.0.0.0 %DEFAULT_GATEWAY_IPV4%

@REM

@REM @REM ROUTE DELETE 0.0.0.0 MASK 0.0.0.0 %DEFAULT_GATEWAY_IPV4%
@REM ROUTE CHANGE 0.0.0.0 MASK 0.0.0.0 %DEFAULT_GATEWAY_IPV4% METRIC 400
@REM @REM ROUTE ADD 0.0.0.0 MASK 0.0.0.0 %DEFAULT_GATEWAY_IPV4% METRIC 300
@REM @REM ROUTE CHANGE 0.0.0.0 MASK 0.0.0.0 172.19.0.1 METRIC 400

@REM ROUTE ADD 159.65.224.199 %DEFAULT_GATEWAY_IPV4% METRIC 60
@REM @REM ROUTE CHANGE 159.65.224.199 %DEFAULT_GATEWAY_IPV4% METRIC 60

@REM The following hardcoded 192.168.99.1 should be changed sometimes!!
@REM @REM ROUTE ADD 0.0.0.0 MASK 0.0.0.0 %DEFAULT_GATEWAY_IPV4% METRIC 45
@REM ROUTE ADD 0.0.0.0 MASK 0.0.0.0 192.168.99.1 METRIC 40
@REM ROUTE CHANGE 0.0.0.0 MASK 0.0.0.0 192.168.99.1 METRIC 40
@REM ROUTE ADD 0.0.0.0 MASK 0.0.0.0 192.168.99.1 METRIC 390
@REM ROUTE CHANGE 0.0.0.0 MASK 0.0.0.0 192.168.99.1 METRIC 390


@REM It is possible to route all traffic through the DNS tunnel. To do this, first add a host route to the nameserver used by iodine over the wired/wireless interface with the default gateway as gateway. Then replace the default gateway with the iodined server's IP address inside the DNS tunnel, and configure the server to do NAT.
@REM The ROUTE changes attempt to perform this rerouting.
@REM ROUTE -f to flush/reset routes.

@REM This is a success scenario (it seems):
@REM iodinec -f -P "1#GXVeMc" 159.65.224.199 iodine.gilgamesh.cc
@REM Opening device Ethernet
@REM Opened IPv4 UDP socket
@REM Opened IPv4 UDP socket
@REM Sending DNS queries for iodine.gilgamesh.cc to 159.65.224.199
@REM Autodetecting DNS query type (use -T to override).Opened IPv4 UDP socket

@REM Using DNS type NULL queries
@REM Version ok, both using protocol v 0x00000502. You are user #0
@REM Enabling interface 'Ethernet'
@REM Setting IP of interface 'Ethernet' to 192.168.99.2 (can take a few seconds)...

@REM Server tunnel IP is 192.168.99.1
@REM Testing raw UDP data to the server (skip with -r)
@REM Server is at 159.65.224.199, trying raw login: ....failed
@REM Using EDNS0 extension
@REM Switching upstream to codec Base128
@REM Server switched upstream to codec Base128
@REM No alternative downstream codec available, using default (Raw)
@REM Switching to lazy mode for low-latency
@REM Server switched to lazy mode
@REM Autoprobing max downstream fragment size... (skip with -m fragsize)
@REM .768 ok.. 1152 ok.. ...1344 not ok.. ...1248 not ok.. ...1200 not ok.. 1176 ok.. 1188 ok.. will use 1188-2=1186
@REM Setting downstream fragment size to max 1186...
@REM Connection setup complete, transmitting data.
