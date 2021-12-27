---
title: Batch photos to powerpoint slideshow in macOS
category:
  - null
tags:
  - null
top: 1
categories: []
toc: false
date: 2021-02-16 00:29:22
---

In Microsoft PowerPoint for Mac Version 16.45, feature to bulk import images and having them in separate slides isn't present. This post covers how to achieve this in macOS. You need to create an Automator script to achieve the same. With Powerpoint 2011 Automator scripts were available but these are not present with latest version of Microsoft PowerPoint for Mac. Follow the instructions below to get started:
**Step 1: Download Automator scripts**
Forum post which discussion on the same issue.
[https://answers.microsoft.com/en-us/msoffice/forum/msoffice_powerpoint-mso_mac-mso_mac2016/powerpoint-2016-and-automator-cant-see-ppt-in-the/464748a8-43f3-4c2c-badf-a76a644ea265](https://answers.microsoft.com/en-us/msoffice/forum/msoffice_powerpoint-mso_mac-mso_mac2016/powerpoint-2016-and-automator-cant-see-ppt-in-the/464748a8-43f3-4c2c-badf-a76a644ea265)
One drive link to download:
[https://onedrive.live.com/redir?resid=DE8ADB12A20968E4!3226&authkey=!AMh-grSm44uwOC0&ithint=file%2czip](https://onedrive.live.com/redir?resid=DE8ADB12A20968E4!3226&authkey=!AMh-grSm44uwOC0&ithint=file%2czip
)
**Step 2: Create the Automator script**
Watch the video to create the Automator script
[https://www.youtube.com/watch?v=5VEdJvVOOLY](https://www.youtube.com/watch?v=5VEdJvVOOLY
)
**Step 3: Granting permission**
I had 200 images to convert to a slidedeck and I run into permission issues. Moving the images to a sandboxed folder helped to resolve this. 
Folder path is:
```
/Users / (YourUsername) / Library / Group Containers /UBF8T346G9.Office
```
Move your files in the above folder and then run the Automator script and it should work without any issues. 
Reference: [https://answers.microsoft.com/en-us/msoffice/forum/msoffice_powerpoint-mso_mac-mso_mac2016/the-dreaded-grant-file-access-in-powerpoint/d54b41d2-939d-4989-a788-df6c53cda536](https://answers.microsoft.com/en-us/msoffice/forum/msoffice_powerpoint-mso_mac-mso_mac2016/the-dreaded-grant-file-access-in-powerpoint/d54b41d2-939d-4989-a788-df6c53cda536)

**Permanent fix for permission issue:(yet to try)**
[https://appuals.com/office-2016-grant-access-error-on-macos/](https://appuals.com/office-2016-grant-access-error-on-macos/
)[https://translate.google.com/translate?hl=en&sl=zh-CN&u=https://w6u.netlify.app/microsoft-office-mac-grant-access.html&prev=search&pto=aue](https://translate.google.com/translate?hl=en&sl=zh-CN&u=https://w6u.netlify.app/microsoft-office-mac-grant-access.html&prev=search&pto=aue
)

Disable snapshot thumbnail in VLC:
https://forum.videolan.org/viewtopic.php?f=12&p=517835
This is quite hidden indeed. Click on "Show all" in the Preferences dialog, then on Video on the left and uncheck "Display video snapshot preview" on the right (you need to scroll down). Save and restart VLC.
