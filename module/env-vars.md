# `env-vars`

Some environment variables need to be customized.

## `PATH`

The *user-specific* `PATH` environment variable needs to be updated to include the following directories:

1. `monochrome/local.syncthing/bin`
2. `monochrome/bin`
3. `monochrome/archive.syncthing/bin`

These PATHs must be added to the *system-specific* environment variable if any programs need them prior to logon.

### Windows

Search for “Edit the system environment variables” in the start menu. Add the above directories, in order, into the “User variables for 0” section under the `Path` variable.

There is a way to accomplish this via `setx`, but `setx` conflates user-specific vs. system-wide environment variables, which is not the desired behavior. Do not run the following:

```batch
SETX path "%USERPROFILE%\main.syncthing\monochrome\bin;%PATH%"
```

### Linux

Add the following to `~/.bashrc`:

```bash
export PATH="$HOME/main.syncthing/monochrome/local.syncthing/bin:$HOME/main.syncthing/monochrome/bin:$HOME/main.syncthing/monochrome/archive.syncthing/bin:$PATH"
```

`~` may not function as intended so do test after adding the above line:

```bash
echo $PATH
```

## `PROMPT`

This shortens the working directory from the command line prompt, and leaves just `> `.

### Windows

Add the following variable to the user-specific variables. Observe the space at the end.

```batch
SET PROMPT=$G 
```

### Linux

```bash
export PS1="> "
```

## `HISTSIZE`

On server machines, setting a larger history size can help recover bash commands executed a long time ago.

### Linux

```bash
HISTSIZE=4096
HISTFILESIZE=65536
```

No `export` is needed: <https://unix.stackexchange.com/questions/107851/using-export-in-bashrc>.
