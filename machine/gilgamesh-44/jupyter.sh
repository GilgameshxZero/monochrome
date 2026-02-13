#!/usr/bin/env bash
source ~/main.syncthing/utulek/.venv/bin/activate;
# ~/main.syncthing/monochrome/local.syncthing/app/juice-client/juicify \
# 	--address 192.168.50.49:43210 \
# 	jupyter lab \
# 	--NotebookApp.token='' \
# 	--NotebookApp.password='' \
# 	--NotebookApp.disable_check_xsrf='True' \
# 	--NotebookApp.allow_origin='*' \
# 	--NotebookApp.ip='0.0.0.0' \
# 	--NotebookApp.notebook_dir='~/main.syncthing/utulek';
jupyter lab \
	--ServerApp.open_browser='False' \
	--ServerApp.token='' \
	--ServerApp.password='' \
	--ServerApp.disable_check_xsrf='True' \
	--ServerApp.allow_origin='*' \
	--ServerApp.ip='0.0.0.0' \
	--ServerApp.notebook_dir='~/main.syncthing/utulek';
