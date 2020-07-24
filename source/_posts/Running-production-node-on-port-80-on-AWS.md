---
title: Running production node on port 80 on AWS
category:
  - null
tags:
  - AWS
top: 1
originContent: ''
categories: []
toc: false
date: 2020-05-10 22:24:13
---

```language
sudo setcap 'cap_net_bind_service=+ep' $(which node)
```
