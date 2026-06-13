---
title: How to set file permissions in WSL (Windows Subsystem for Linux)
date: 2021-12-28 01:10:20
tags:
  - WSL
  - Linux
  - Windows
categories:
  - Development
description: How to make chmod work persistently in WSL by creating a wsl.conf file, so file permissions like 600 for .pem keys are retained after reboot.
---

## What is WSL?

Windows Subsystem for Linux (WSL) lets you run a Linux environment directly on Windows — including tools like `grep`, `sed`, `awk`, and SSH. This guide uses Ubuntu 18 on Windows 10.

## The Problem

If you run `chmod` inside WSL to set permissions on a file (e.g., a `.pem` key), the change doesn't stick. Windows and Linux handle permissions differently, so WSL ignores `chmod` by default unless you configure it to respect Linux metadata.

For SSH keys (`.pem`, `.cer`), you typically need permissions set to `600` (`rw-------`). Without the fix below, you'll see "permissions are too open" errors.

## Fix: Enable metadata in WSL

**Step 1: Create or edit `/etc/wsl.conf`**

```bash
sudo nano /etc/wsl.conf
```

Add the following:

```ini
[automount]
enabled  = true
root     = /mnt/
options  = "metadata,umask=22,fmask=11"
```

Save with `Ctrl + X`, then `Y`, then `Enter`.

**Step 2: Shut down WSL**

Open a regular Windows Command Prompt (not WSL) and run:

```bash
wsl --shutdown
```

**Step 3: Apply permissions**

Re-open Windows Terminal, switch to Ubuntu, then set your permissions:

```bash
chmod 600 mykey.pem
```

**Step 4: Verify**

```bash
ls -l mykey.pem
```

You should see:

```
-rw------- 1 user group ... mykey.pem
```

## Reference links

1. [Setup WSL on Windows](https://docs.microsoft.com/en-us/windows/wsl/setup/environment)
2. [Reset WSL distro password](https://winaero.com/reset-password-wsl-linux-distro-windows-10/)
3. [Get Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701)
4. [Understanding Linux file permissions](https://www.linux.com/training-tutorials/understanding-linux-file-permissions/)
5. [chmod in WSL doesn't work — Stack Overflow](https://stackoverflow.com/questions/46610256/chmod-wsl-bash-doesnt-work)
