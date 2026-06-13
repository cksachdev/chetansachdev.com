---
title: My preferred settings on a new Mac
date: 2020-03-14 18:30:02
tags:
  - macOS
  - Setup
categories:
  - Computers
description: A personal setup checklist for a new Mac — running the laptop script, installing dev tools via Homebrew, configuring Karabiner, Itsycal, function keys, and more.
---

My go-to setup checklist when starting fresh on a new Mac. Tested on macOS Catalina.

## Step 1: Run the laptop script

The [thoughtbot/laptop](https://github.com/thoughtbot/laptop) script installs essential macOS and developer tools in one shot.

## Step 2: Install apps via Homebrew

```bash
brew install iterm2 alfred bartender dropbox google-chrome licecap skype slack sublime-text virtualbox whatsapp visual-studio-code karabiner-elements sourcetree araxis-merge itsycal the-unarchiver brave-browser easyfind omnidisksweeper vlc barrier keycastr
```

## Step 3: Set up Hexo (for this blog)

```bash
npm install hexo-cli -g
```

Then download and configure **HexoClient** for a GUI editor.

## Step 4: Configure productivity tools

- **Hydra** — window management
- **Karabiner Elements** — keyboard remapping

## Step 5: System preferences

- Disable **Siri**
- Configure **Itsycal** date format: `EEEE, d-MMM-y h:mm a`

## Step 6: Install older VLC (for Automator compatibility)

The latest VLC can have issues with Automator scripts. Download version 2.2.8:
[VLC download archive](https://download.videolan.org/pub/videolan/vlc/)

## Step 7: App Store apps

1. **Super Easy Timer**
2. [Microsoft Remote Desktop](https://apps.apple.com/us/app/microsoft-remote-desktop/id1295203466?mt=12)

## Tip: Reset function keys for easier debugging

By default, the top row acts as media keys. To use them as standard F1–F12:

1. Go to **System Preferences → Keyboard**
2. Check **Use F1, F2, etc. keys as standard function keys**

![Function key setting step 1](/images/2020/03/14/de9b8d30-65df-11ea-b442-29d283043002.png)
![Function key setting step 2](/images/2020/03/14/e7fcacb0-65df-11ea-b442-29d283043002.png)

## Tip: Increase Apple Mouse tracking speed

**System Preferences → Mouse → Tracking speed** — drag the slider to the right.

![Mouse tracking speed](/images/2020/03/14/f3fcba00-65df-11ea-b442-29d283043002.png)

## Tip: Show battery percentage in menu bar

**System Preferences → Battery** → check **Show percentage**.

![Battery percentage](/images/2020/03/14/40a51e10-65f4-11ea-b442-29d283043002.png)

## Reference

- [Better development experience on Mac](https://ahadsheriff.medium.com/how-to-get-a-better-development-experience-on-your-mac-8478be58bba4)
- [Mac setup video — Coding Garden](https://www.youtube.com/watch?v=tMNOpaQrfAE&t=275s)
