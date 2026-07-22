# Source this file directly.
# Doesn't work on Darwin?
# tabs 2

unalias ls &> /dev/null
# alias tmux="TERM=linux-m tmux"
# alias finch="TERM=linux finch"

HISTSIZE=262144
HISTFILESIZE=262144
HISTCONTROL=ignoreboth:erasedups

# True white.
echo -en "\e]P7ffffff"
# Block cursor shape.
echo -en "\033[?112c"

export PATH="$HOME/main.syncthing/monochrome/local.syncthing/bin:$HOME/main.syncthing/monochrome/bin:$HOME/main.syncthing/monochrome/archive.syncthing/bin:$PATH:$HOME/.local/bin"
export PS1="> "
export LYNX_CFG="$HOME/main.syncthing/monochrome/module/lynx/lynx.cfg"
export WWW_HOME="http://ddg.gg"
export GPG_TTY="$(tty)"
export EDITOR="/usr/bin/vim"
export RL_CLCOPY_CMD="xargs -I'{}' -0 -n1 clip '{}'"

# For any output, e.g. the echos on Darwin.
# clear
