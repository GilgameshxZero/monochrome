#!/usr/bin/env bash
# Takes a number as input and opens that link from that line
# in /tmp/.neomutt-html-parse.tmp.txt.
read -s -p "Link number: " link
url=$(sed -n "${link}p" /tmp/.neomutt-html-parse.tmp.txt)
[ -n "$url" ] && "${BROWSER:-xdg-open}" "$url"

