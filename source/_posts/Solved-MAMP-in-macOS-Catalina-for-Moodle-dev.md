---
title: 'Solved: MAMP + Moodle on macOS Catalina'
date: 2020-08-30 15:02:14
tags:
  - macOS
  - MAMP
  - Moodle
  - PHP
categories:
  - Development
description: How to get Moodle running locally with MAMP on macOS Catalina, including disabling Gatekeeper, editing php.ini to increase file upload limits, and fixing SCORM issues.
---

Getting Moodle to work locally with MAMP on macOS Catalina requires a few extra steps beyond a standard install.

## Steps

**Step 1: Download Moodle for macOS**

Get the Moodle package from the [official macOS download page](https://download.moodle.org/macosx/).

**Step 2: Disable Gatekeeper to allow unsigned apps**

macOS Catalina's security settings may block the MAMP app. To disable Gatekeeper:

```bash
sudo spctl --master-disable
```

Reference: [How to disable Gatekeeper via command line](https://osxdaily.com/2015/05/04/disable-gatekeeper-command-line-mac-osx/)

**Step 3: Find and edit php.ini for your PHP version**

1. Open MAMP → **Preferences → PHP** and note your current PHP version (e.g., 7.2.10)
2. Edit the corresponding `php.ini` file:

```
/Applications/MAMP/bin/php/php7.2.10/conf/php.ini
```

Increase the upload limits (important for large SCORM packages):

```ini
post_max_size = 100M
upload_max_filesize = 90M
```

**Step 4: Restart MAMP**

Stop your MAMP server, then start it again. Imports and SCORM uploads should now work without errors.

## Other useful links

- [SCORM suspend_data encoding](https://stackoverflow.com/questions/944582/what-is-cmistring4096-and-how-can-i-extract-the-data-within-it)
- [Tracking course-specific data with SCORM](https://elearningindustry.com/getting-started-with-scorm-tracking-course-specific-data)
- [Moodle forum: PHP settings for large uploads](https://moodle.org/mod/forum/discuss.php?d=224311)
