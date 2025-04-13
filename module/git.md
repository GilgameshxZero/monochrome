# `git`

git is used for programmatic line-by-line version control and should be installed on all platforms.

## Installation

### Windows

Take care the select the following options when installing:

1. Line endings: checkout as-is, commit as-is. This ensures that we have full control over 
2. Optional Unix tools: installed. This enables tools like `ls` and `sed` for us in the standard `cmd.exe`.

## Configuration

The following commands configures common aliases (may require `;` to be appended at the end of each line):

```bash
git config --global user.email "~@gilgamesh.cc"
git config --global user.name "GILGAMESH"
git config --global core.autocrlf "false"
git config --global core.fileMode "false"
git config --global alias.co "checkout"
git config --global alias.cp "cherry-pick"
git config --global alias.ac "! git add -A && git commit --allow-empty-message -am"
git config --global alias.ace "! git add -A && git commit --allow-empty --allow-empty-message -am ''"
git config --global alias.rs "! git reset --soft HEAD~1"
git config --global alias.cbr "! git branch | grep -v 'master' | xargs git branch -D"

git config --global alias.p "! [[ $(git config 'branch.$(git symbolic-ref --short HEAD).merge') = '' ]] && git push -u origin $(git symbolic-ref --short HEAD) || git push"
git config --global alias.rgc "! git reflog expire --expire=now --all && git gc --prune=now --aggressive"
```

Alternatively, the `.gitconfig` file in `monochrome/module/git` may be used instead.
