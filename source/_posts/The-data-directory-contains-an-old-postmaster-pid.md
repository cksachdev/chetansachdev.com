---
title: The data directory contains an old postmaster.pid
category:
  - null
tags:
  - null
top: 1
originContent: ''
categories: []
toc: false
date: 2020-05-10 22:34:17
---

![image.png](/images/2020/05/10/b672658d-3c3c-43da-89bc-3b9a1465b68a.png)

**Solution**
```
rm ~/Library/Application\ Support/Postgres/var-12/postmaster.pid
```