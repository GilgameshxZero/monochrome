# `tmux`

tmux is used to run programs in the background on Unix.

Sometimes, after disconnecting from an SSH session, tmux sessions may be lost. Lost sessions may be found by re-starting the tmux process (does not restart the background processes themselves): `pkill -10 tmux`.
