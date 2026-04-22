" source this file with
" `so ~/main.syncthing/monochrome/module/vim/.vimrc`.

set tabstop=2
set colorcolumn=60
set autoindent
set scrolloff=2
hi colorcolumn ctermbg=8

" autoread doesn't work, needs additional fixes.
set autoread
au CursorHold * checktime
