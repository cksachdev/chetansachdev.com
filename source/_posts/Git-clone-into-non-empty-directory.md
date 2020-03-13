---
title: Git clone into non-empty directory
category:
  - null
tags:
  - null
top: 1
categories: []
toc: false
date: 2020-02-14 03:00:36
---

```
cd nonemptydir
git init
git remote add origin https:path/to/the/repository.git
git pull origin master --allow-unrelated-histories
stree . // To view the repo
git add -A
git commit -m 'first commit'
git push -u origin master

```