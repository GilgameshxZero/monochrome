#!/usr/bin/env bash
# Essentially does lynx -dump, but also preserves links in a
# separate file, which is used when a link is selected. Only
# the final HTML attachment links are saved in this file.
lynx -dump -listonly -nonumbers -hiddenlinks=ignore $1 > /tmp/.neomutt-html-parse.tmp.txt
lynx -dump -hiddenlinks=ignore $1
(sleep 300; rm "/tmp/.neomutt-html-parse.tmp.txt") 1> /dev/null 2> /dev/null & disown

