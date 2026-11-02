#!/usr/bin/env bash
# Pipes HTML to browser tab properly for `mailcap`. Fixed name is good for preserving browser preferences across viewings.
echo "<!DOCTYPE html><html><head><style>body img { max-width: 100vw; max-height: 100vh; }</style></head><body>" > ".neomutt-html-open.tmp.html"
cat "$1" >> ".neomutt-html-open.tmp.html"
echo "</body></html>" >> ".neomutt-html-open.tmp.html"
"${BROWSER:-xdg-open}" ".neomutt-html-open.tmp.html"
(sleep 64; rm ".neomutt-html-open.tmp.html") 1> /dev/null 2> /dev/null &
