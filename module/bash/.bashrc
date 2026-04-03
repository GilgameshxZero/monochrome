# nvm.
source /usr/share/nvm/init-nvm.sh

# Personal.
# alias ls="ls --color=none"
unalias ls
alias cmus="TERM=linux cmus"
alias newsboat="TERM=linux newsboat"
# alias tmux="TERM=tmux tmux"

HISTSIZE=65536
HISTFILESIZE=262144

# setfont -d ter-124b
echo -en "\e]P7ffffff"
echo -en "\033[?112c"

export PATH="$HOME/main.syncthing/monochrome/local.syncthing/bin:$HOME/main.syncthing/monochrome/bin:$HOME/main.syncthing/monochrome/archive.syncthing/bin:$PATH"
export PS1="> "
# export PROMPT_COMMAND="echo -en '\033[?112c'"
export TERM="linux-m"
export LYNX_CFG="$HOME/lynx.cfg"
export WWW_HOME="http://gilgamesh.cc"
