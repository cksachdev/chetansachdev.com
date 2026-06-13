---
title: Removing the Moodle logo and updating the favicon
date: 2020-02-12 01:08:47
tags:
  - Moodle
  - HTML
  - AWS
categories:
  - Development
description: How to replace the favicon and remove the Moodle logo from the Boost theme footer on a Bitnami Moodle installation hosted on AWS EC2.
---

Two common customizations for a Moodle site: replacing the favicon and removing the Moodle branding from the footer.

## Updating the favicon

**Step 1: Create your favicon**

Use [Photopea](https://www.photopea.com/) (free, browser-based) or any image editor to create a 32×32 or 64×64 pixel `.ico` file.

**Step 2: Locate the favicon directory on the server**

On Bitnami Moodle, navigate to:

```
/opt/bitnami/apps/moodle/htdocs/theme/boost/pix
```

**Step 3: Back up the existing favicon**

Rename the current file before replacing it:

```bash
mv favicon.ico favicon.ico.bak
```

**Step 4: Upload your new `favicon.ico`**

Copy your new file to the same directory.

**Step 5: Clear the cache**

Do a hard refresh in the browser (`Cmd + Shift + R` on Mac, `Ctrl + Shift + R` on Windows).

If it still doesn't update, try:

1. Go to **Site Administration → Appearance → Themes → Theme settings**
2. Enable **Theme designer mode** and save
3. Refresh the browser
4. Disable **Theme designer mode** and save again

## Removing the Moodle logo from the Boost footer

**Step 1: Locate the footer template**

On Bitnami Moodle:

```
/opt/bitnami/apps/moodle/htdocs/theme/boost/templates/footer.mustache
```

**Step 2: Edit `footer.mustache`**

Open the file and remove the `<img>` tag or block that references the Moodle logo.

![footer.mustache example](/images/2020/02/12/62befb40-4d05-11ea-93b3-3feac072eb06.png)

**Step 3: Upload the modified file back to the server**

The Moodle logo should no longer appear in the footer after the change.

> **Note:** These steps apply to the Boost theme. Other themes will have different template paths.
