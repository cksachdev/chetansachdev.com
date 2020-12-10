---
title: 'Solved: MAMP in macOS Catalina for Moodle dev'
category:
  - null
tags:
  - null
top: 1
originContent: ''
categories: []
toc: false
date: 2020-08-30 15:02:14
---


**Steps**
1. Download Moodle package from https://download.moodle.org/macosx/
2. Disable Security in macOS Catalina
   ```
   sudo spctl --master-disable
   ```
3. edit the php.ini file for the php version you are using. i.e. v7.2.1. First check which version you're using by going to
   ```
   MAMP-> Preferences -> PHP -> Select/Specify PHP Version
   ```
   Then go to /Applications/MAMP/bin/php/php7.2.10/conf/php.ini and input the new settings there.
   Increase SCORM package file size limit
   ```
   - change the "post_max_size" to 100M
   - change the " upload_max_filesize" to 90M
   ```
4. Stop your server and restart MAMP. Import should now run as expected.


**Other relevant links** 
suspend_data encoding and its usage:
https://stackoverflow.com/questions/944582/what-is-cmistring4096-and-how-can-i-extract-the-data-within-it
https://community.adaptlearning.org/mod/forum/discuss.php?d=3756

Tracking course specific data:
https://elearningindustry.com/getting-started-with-scorm-tracking-course-specific-data	

Reference:
- https://moodle.org/mod/forum/discuss.php?d=224311
- https://osxdaily.com/2015/05/04/disable-gatekeeper-command-line-mac-osx/
- https://www.rjerz.com/professional/work/Presentations/MoodleMoot2019/Moodle_Sandbox.html
- https://moodle.org/mod/forum/discuss.php?d=392057
- https://vimeo.com/367749541
