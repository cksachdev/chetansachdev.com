---
title: Day 1 with MacBook Air - Apple Silicon (M1)
date: 2021-02-08 02:01:36
tags:
  - macOS
  - Apple Silicon
  - Node.js
categories:
  - Computers
description: First impressions and developer setup notes for the Apple Silicon M1 MacBook Air, including how to install nvm, Node.js, and common tools via Homebrew using Rosetta.
---

My first impressions and setup notes after switching to the Apple Silicon M1 MacBook Air.

## First Impressions

- No heating issues at all
- Noticeably long battery life
- Good speaker quality

## Setting Up a Node.js Development Environment

Apple Silicon uses ARM architecture, so some tools need special handling. Here's what I ran into and how I fixed it.

### Issue 1: nvm and Node.js won't install natively

As of early 2021, nvm couldn't install Node.js natively on M1. The fix is to run Terminal in Rosetta (x86_64 emulation mode).

**Step 1: Open Terminal in Rosetta**

1. Find Terminal (or iTerm) in Finder
2. Right-click → **Get Info**
3. Check **Open using Rosetta**
4. Restart Terminal

Now install nvm and Node.js normally — they'll run under x86_64.

References: [Node.js on Apple Silicon](https://stackoverflow.com/questions/64899827/nodejs-on-apple-silicon-m1)

### Issue 2: "bad CPU type in executable" errors

Install Rosetta via the command line:

```bash
softwareupdate --install-rosetta
```

Reference: [zsh bad CPU type fix](https://apple.stackexchange.com/questions/408375/zsh-bad-cpu-type-in-executable)

### Issue 3: Check and switch architecture

To check which architecture your shell is running under:

```bash
node -p process.arch
```

To switch to x86_64:

```bash
arch -x86_64 $SHELL
```

### Step 2: Install common dev tools via Homebrew

Once Rosetta is set up, install everything you need:

```bash
brew install iterm2 alfred licecap sublime-text visual-studio-code karabiner-elements sourcetree araxis-merge itsycal the-unarchiver easyfind omnidisksweeper
```

## Miscellaneous: "You don't have permission to open the application"

If an app is blocked from opening:

**Step 1:** Open Terminal

**Step 2:** Run:
```bash
sudo chmod -R 755 /path/to/app
```

**Step 3:** Enter your password when prompted

**Step 4:** Try opening the app again — it should work now.

*Initial system stats (without any apps installed):*
![Initial stats](/images/2021/02/08/a099994a-0d3c-4f1f-abe3-fd040dcdd4c4.png)
