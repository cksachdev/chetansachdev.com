---
title: Resetting Visual Studio Code in macOS
date: 2020-02-08 03:29:30
tags:
  - VS Code
  - macOS
  - Computers
categories:
  - Development
description: How to reset VS Code on macOS to a clean state by backing up your settings and extensions, then restoring your preferred configuration.
---

After installing too many extensions, VS Code can slow down noticeably. This guide shows how to reset it to a clean state while keeping a backup of your old settings so you can selectively restore what you actually need.

## Step 1: Close VS Code

Make sure VS Code is fully closed before running any commands.

## Step 2: Back up your settings and extensions

```bash
mv ~/Library/Application\ Support/Code ~/Library/Application\ Support/backup-Code
mv ~/.vscode ~/backup-vscode
```

Your old settings and all installed extensions are now safely backed up in those folders.

## Step 3: Launch VS Code

Open VS Code — it will start fresh with no extensions or custom settings.

## Step 4: Apply your preferred settings

Press `⌘ + ,` to open Settings, switch to the JSON view, and paste:

```json
{
  "workbench.colorTheme": "ArtSchool",
  "editor.fontFamily": "Operator Mono",
  "editor.fontLigatures": true,
  "editor.wordWrap": "on",
  "editor.mouseWheelZoom": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

> You'll need to install the **ArtSchool** theme, **Operator Mono** font, and **Prettier** extension for these settings to take effect.

After applying the settings, your editor should look clean and fast again:

![VS Code after reset](/images/2020/02/08/06ba4fb0-49f5-11ea-984d-f70f4cd221c6.png)
