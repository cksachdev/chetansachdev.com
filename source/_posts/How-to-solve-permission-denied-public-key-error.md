---
title: How to solve "Permission denied (publickey)" error in Git
date: 2020-06-30 22:48:59
tags:
  - Git
  - SSH
categories:
  - Development
description: Fix the "Permission denied (publickey)" SSH error when connecting to GitHub or GitLab by generating an SSH key and adding it to your account.
---

The `Permission denied (publickey)` error means your local SSH key either doesn't exist, isn't loaded, or hasn't been added to your Git host (GitHub, GitLab, etc.).

## Steps

**Step 1: Check if you already have an SSH key**

```bash
ls -al ~/.ssh
```

Look for files named `id_rsa` / `id_rsa.pub` or `id_ed25519` / `id_ed25519.pub`. If they exist, skip to Step 3.

**Step 2: Generate a new SSH key**

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Press Enter to accept the default file location and optionally set a passphrase.

**Step 3: Add the key to the SSH agent**

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

**Step 4: Copy your public key**

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the entire output.

**Step 5: Add the key to GitHub / GitLab**

- **GitHub:** Settings → SSH and GPG keys → New SSH key → paste and save
- **GitLab:** Preferences → SSH Keys → paste and save

**Step 6: Test the connection**

```bash
ssh -T git@github.com
```

You should see: `Hi username! You've successfully authenticated...`

## Reference

[Stack Overflow: How to solve Permission denied (publickey)](https://stackoverflow.com/questions/2643502/how-to-solve-permission-denied-publickey-error-when-using-git)
