---
title: 'Fix: postgres command not found in the PATH'
date: 2020-05-10 22:35:47
tags:
  - PostgreSQL
  - macOS
  - Database
categories:
  - Development
description: How to fix the "command not found" error for psql and other PostgreSQL commands on macOS by adding the Postgres.app bin directory to your PATH.
---

If you've installed [Postgres.app](https://postgresapp.com/) on macOS but get `command not found` when running `psql` or other Postgres commands, the binary directory isn't in your `PATH`.

## Fix

**Step 1: Add Postgres binaries to your PATH**

Run this in your terminal (replacing `12` with your installed Postgres version):

```bash
export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/12/bin
```

To make this permanent, add the line to your shell config file (`~/.zshrc` for Zsh, `~/.bash_profile` for Bash):

```bash
echo 'export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/12/bin' >> ~/.zshrc
source ~/.zshrc
```

**Step 2: Verify**

```bash
psql --version
```

You should see the Postgres version output without any error.

## Bonus: Install the `pg` Ruby gem

If you're also getting errors installing the `pg` gem in a Rails project after fixing the PATH:

```bash
gem install pg -v '1.2.2' --source 'https://rubygems.org/'
```
