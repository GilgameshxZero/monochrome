Configures a runpod instance, with an attached network drive, for Python 3.11.

```bash
apt install -y software-properties-common;
add-apt-repository universe -y;
add-apt-repository ppa:deadsnakes/ppa -y;
DEBIAN_FRONTEND=noninteractive  apt install -y python3.11 python3.11-venv htop tmux zip unzip git rsync;
ln -s /workspace/.vscode-server /root/.vscode-server;
ln -s /workspace/ft-robustness /root/ft-robustness;

git config --global user.email "~@gilgamesh.cc";
git config --global user.name "GILGAMESH";
git config --global core.autocrlf false;
git config --global core.fileMode false;
git config --global alias.co "checkout";
git config --global alias.cp "cherry-pick";
git config --global alias.ac "! git add -A && git commit --allow-empty-message -am";
git config --global alias.ace "! git add -A && git commit --allow-empty --allow-empty-message -am ''";
git config --global alias.rs "! git reset --soft HEAD~1";
git config --global alias.cbr "! git branch | grep -v 'master' | xargs git branch -D";
```
