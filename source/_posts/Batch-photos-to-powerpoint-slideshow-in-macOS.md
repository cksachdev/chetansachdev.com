---
title: Batch photos to PowerPoint slideshow in macOS
date: 2021-02-16 00:29:22
tags:
  - macOS
  - PowerPoint
  - Automator
categories:
  - Productivity
description: How to bulk import images into separate PowerPoint slides on macOS using an Automator script, since PowerPoint for Mac 16.45 removed this built-in feature.
---

Microsoft PowerPoint for Mac (version 16.45+) removed the ability to bulk import images into separate slides. This guide shows you how to do it using a macOS Automator script.

## Steps

**Step 1: Download the Automator script**

The script was shared on the Microsoft community forum. Download it from OneDrive:

- [Forum thread for context](https://answers.microsoft.com/en-us/msoffice/forum/msoffice_powerpoint-mso_mac-mso_mac2016/powerpoint-2016-and-automator-cant-see-ppt-in-the/464748a8-43f3-4c2c-badf-a76a644ea265)
- [Direct OneDrive download link](https://onedrive.live.com/redir?resid=DE8ADB12A20968E4!3226&authkey=!AMh-grSm44uwOC0&ithint=file%2czip)

**Step 2: Create the Automator workflow**

Follow this video walkthrough to set up the script in Automator:

[Watch the tutorial on YouTube](https://www.youtube.com/watch?v=5VEdJvVOOLY)

**Step 3: Fix permission errors (if you hit them)**

If you get a "Grant File Access" error when running the script, move your images into PowerPoint's sandboxed folder before running:

```
/Users/(YourUsername)/Library/Group Containers/UBF8T346G9.Office
```

Move your images there, then run the Automator script — it should work without permission issues.

- [Forum thread on the permission error](https://answers.microsoft.com/en-us/msoffice/forum/msoffice_powerpoint-mso_mac-mso_mac2016/the-dreaded-grant-file-access-in-powerpoint/d54b41d2-939d-4989-a788-df6c53cda536)

## Bonus: Disable VLC snapshot preview thumbnail

If you're using VLC and want to turn off the snapshot preview popup:

1. Open VLC → **Preferences** → click **Show All**
2. Select **Video** in the left panel
3. Uncheck **Display video snapshot preview** (scroll down to find it)
4. Save and restart VLC
