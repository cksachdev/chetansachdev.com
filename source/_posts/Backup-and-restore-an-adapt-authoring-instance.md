---
title: Backup and restore an adapt authoring instance
category:
  - null
tags:
  - null
top: 1
originContent: ''
categories: []
toc: false
date: 2020-05-10 22:30:47
---

```
zip -r * app/* -x\app/bower_components/* -x\node_modules/* -x*.zip


zip -r customadapt.zip ./custom_adapt/* -x "*.git*" -x "**/node_modules/*"

mongodump
zip -r adaptdata.zip ./adapt-tenant-master/*

mongorestore --db adapt-tenant-master --drop ./adapt-tenant-master



```
