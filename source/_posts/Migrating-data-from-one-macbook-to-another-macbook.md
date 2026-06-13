---
title: Migrating data from one MacBook to another
date: 2020-03-13 12:04:57
tags:
  - macOS
  - Computers
categories:
  - Computers
description: A practical checklist for transferring data between MacBooks — browser passwords, Keychain, Slack, Google Drive, source code, and more.
---

Here's a practical checklist for moving your data when switching from one Mac to another.

## Browser: Export passwords from Brave

1. Open **Brave** on your old Mac
2. Go to **Settings → Passwords**
3. Click the **⋮** menu → **Export passwords**
4. Save the CSV file somewhere accessible (e.g., Desktop)
5. On the new Mac, go to the same place and choose **Import**

## Keychain: Transfer saved passwords

Your macOS Keychain stores email passwords, Wi-Fi keys, and more.

- [How to recover email password from Keychain](https://www.lifewire.com/recover-email-password-from-os-x-keychain-1174067)
- [Apple guide: Keychain Access](https://support.apple.com/en-in/guide/keychain-access/kyca1121/mac)

## Source code: Remove node_modules before transferring

Before copying your projects, delete all `node_modules` folders to avoid transferring gigabytes of dependencies:

```bash
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
```

Reference: [Clear node_modules recursively on Mac/Linux](https://rtmccormick.com/2018/01/10/clear-node-modules-folders-recursively-mac-linux/)

## Slack: Re-sign in on the new Mac

Slack workspaces are cloud-based — just sign in again on the new Mac. Your messages and history sync automatically.

Reference: [Transferring Slack to a new computer](https://www.reddit.com/r/Slack/comments/68ytrn/transfer_slack_to_new_computer/)

## Email and Google Drive: Use Google Takeout

Export all your Google data (Gmail, Drive, etc.) at:
[takeout.google.com](https://takeout.google.com/)

## Tip: Use AirDrop for file transfer

AirDrop is significantly faster than copying files over USB or a shared drive. Use it to move large folders between Macs.
