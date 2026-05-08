# `git`

git is used for programmatic line-by-line version control and should be installed on all platforms.

## Installation

### Windows

Take care the select the following options when installing:

1. Line endings: checkout as-is, commit as-is. This ensures we have full control over line endings. The editor of choice on Windows should default to LF if possible.
2. Optional Unix tools: installed. This enables tools like `ls` and `sed` for us in the standard `cmd.exe`.

## Configuration

Copy `module/git/.gitconfig` to `~/.gitconfig` to automatically configure all options below. Repositories should inherit global options where possible, notably for `core.fileMode`.

The following commands configures common aliases (may require `;` to be appended at the end of each line):

```bash
# `true` on POSIX systems which can track filemode, `false` otherwise (Windows).
git config --global core.fileMode "true"

git config --global user.email "c706213d-56d4-42c1-a681-27fd4135a504@gilgamesh.cc"
git config --global user.name "gilgamesh"
git config --global core.autocrlf "false"
git config --global alias.co "checkout"
git config --global alias.cp "cherry-pick"
git config --global alias.ac "! git add -A && git commit --allow-empty-message -am"
git config --global alias.ace "! git add -A && git commit --allow-empty --allow-empty-message -am ''"
git config --global alias.rs "! git reset --soft HEAD~1"
git config --global alias.cbr "! git branch | grep -v 'master' | xargs git branch -D"

git config --global alias.p "! [[ $(git config 'branch.$(git symbolic-ref --short HEAD).merge') = '' ]] && git push -u origin $(git symbolic-ref --short HEAD) || git push"
git config --global alias.rgc "! git reflog expire --expire=now --all && git gc --prune=now --aggressive"
```

### Windows

On Windows, we disable the global `core.fileMode` option so that the OS’s lack of filemode tracking does not cause unnecessary updates to the repository.
