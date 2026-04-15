# Source this file directly.
# Applications.
tabs 2

unalias ls
alias tmux="TERM=linux-m tmux"
alias finch="TERM=linux finch"

HISTSIZE=65536
HISTFILESIZE=262144

# True white.
echo -en "\e]P7ffffff"
# Block cursor shape.
echo -en "\033[?112c"

export PATH="$HOME/main.syncthing/monochrome/local.syncthing/bin:$HOME/main.syncthing/monochrome/bin:$HOME/main.syncthing/monochrome/archive.syncthing/bin:$PATH"
export PS1="> "
export LYNX_CFG="$HOME/main.syncthing/monochrome/module/lynx/lynx.cfg"
export WWW_HOME="http://ddg.gg"
export GPG_TTY="$(tty)"
export EDITOR="/usr/bin/vim"
