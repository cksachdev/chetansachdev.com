---
title: How to set file permissions in WSL?
category:
  - null
tags:
  - null
top: 1
originContent: ''
categories:
  - computer
toc: false
date: 2021-12-28 01:10:20
---

## What is WSL?

Windows Subsystem for Linux lets developrs run Linux environment. You can use your favorite commands from linux such as grep, sed, awk etc. I am using Ubuntu 18 on my Windows 10 machine.

## File permissions

File permissions in linux work in a different way, compared to windows. You need to set it in rwxrwxrwx format. Here r gets a value of 4, w gets a value of 2 and x i.e. execute gets a value of 1, total 7\.

If you are trying to using a .pem or .cer file, you will be getting error saying too open permissions. For a .pem or .cer file you should set it to 600 i.e. `rw-------`.

<span class="ql-cursor">﻿</span>

## Steps to retain the chmod settings in Windows

If you try to use chmod in the WSL, your permissions won't take affect on the file. You need to have wsl.conf file in place to retain the permissions set using chmod command.

**Step 1: Create wsl.conf file**

Commands:

`**sudo nano /etc/wsl.conf**`

Add following lines in wsl.conf

```
[automount]
enabled  = true
root     = /mnt/
options  = "metadata,umask=22,fmask=11"
```

Save the file using `**Ctrl + x**`

**Step 2: Shutdown wsl for the settings to take affect**

Open normal command prompt and run

`wsl --shutdown`

**Step 3: Run chmod again to apply the permissions**

Open Windows Terminal again and switch to Ubuntu shell.

`chmod 600 mykey.pem`

**Step 4: Verify using** `**ls -l**`

Run `ls -l` to verify that permissions are set properly

```
rw-------    mykey.pem
```

## Reference links

1.  [Setup WSL on windows](https://docs.microsoft.com/en-us/windows/wsl/setup/environment)
2.  [Reset WSL Distro password](https://winaero.com/reset-password-wsl-linux-distro-windows-10/)
3.  [Get Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab)
4.  [What is Windows Subsystem for Linux?](https://docs.microsoft.com/en-us/windows/wsl/about)
5.  [Understanding Linux file permissions](https://www.linux.com/training-tutorials/understanding-linux-file-permissions/)
6.  [https://superuser.com/questions/1323645/unable-to-change-file-permissions-on-ubuntu-bash-for-windows-10](https://superuser.com/questions/1323645/unable-to-change-file-permissions-on-ubuntu-bash-for-windows-10)
7.  [https://stackoverflow.com/questions/46610256/chmod-wsl-bash-doesnt-work](https://stackoverflow.com/questions/46610256/chmod-wsl-bash-doesnt-work)