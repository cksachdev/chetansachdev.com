---
title: Removing Moodle logo and updating favicon
category:
  - null
tags:
  - [Graphics]
top: 1
categories: []
toc: false
date: 2020-02-12 01:08:47
---

**Updating favicon**
Generate favicon of your choice. I prefer using https://www.photopea.com/ for minor image editing.
In bitnami version of moodle, navigate to ```/opt/bitnami/apps/moodle/htdocs/theme/boost/pix```
rename existing favicon.ico file to have a backup
Upload your new favicon.ico file in the same directory

You may require a hard refresh in the browser to update favicon. If it still doesn't work, try the steps below:
Access Settings > Appearance > Themes > Theme settings > Theme designer mode check box and save. Refresh your browser. Uncheck the box after it works.

**Removing moodle logo from theme boost footer**
In bitnami version of moodle, navigate to ```/opt/bitnami/apps/moodle/htdocs/theme/boost/templates```
Open footer.mustache in editor of your choice

In theme boost footer.mustache looks like below:
![image.png](/images/2020/02/12/62befb40-4d05-11ea-93b3-3feac072eb06.png)


Save the file and upload it back to EC2 instance. This should remove the moodle logo from "boost" theme. 

Note: These instructions may vary for different themes.