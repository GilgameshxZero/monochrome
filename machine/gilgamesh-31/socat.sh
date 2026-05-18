#!/usr/bin/env bash
# Mirrors port 25 to 2525 for clients with restricted access.
socat tcp-listen:2525,reuseaddr,fork tcp:127.0.0.1:25
