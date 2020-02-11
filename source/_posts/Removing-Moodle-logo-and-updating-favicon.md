---
title: Removing Moodle logo and updating favicon
category:
  - null
tags:
  - null
top: 1
originContent: ''
categories: []
toc: false
date: 2020-02-12 01:08:47
---

**Updating favicon**
Generate favicon of your choice. I prefer using https://www.photopea.com/
In bitnami version of moodle, navigate to /opt/bitnami/apps/moodle/htdocs/theme/boost/pix
rename existing favicon.ico file to have a backup
Upload your new favicon.ico file in the same directory

You may require a hard refresh in the browser to update favicon.

**Removing moodle logo from theme boost footer**
In bitnami version of moodle, navigate to /opt/bitnami/apps/moodle/htdocs/theme/boost/templates
Open footer.mustache in editor of your choice
Locate  {{{ output.home_link }}} and delete the line
In theme boost footer.mustache looks like below:
![image.png](/images/2020/02/12/62befb40-4d05-11ea-93b3-3feac072eb06.png)

Save the file and upload it back to EC2 instance. This should remove the moodle logo from "boost" theme. 

Note: These instructions may vary for different themes.