" source this file with
" `so ~/main.syncthing/monochrome/module/vim/.vimrc`.

set tabstop=2
set colorcolumn=60
set autoindent
set scrolloff=2

" Gray so that it works on both white/black themes.
hi colorcolumn ctermbg=8

autocmd TextChanged,TextChangedI <buffer> silent write
set autoread
au FocusGained,BufEnter * :checktime
