---
title: Lodash - quick experiments in Chrome
category:
  - null
tags:
  - null
top: 1
categories: []
toc: false
date: 2021-01-02 01:07:30
---

chrome://settings/content/javascript
![image.png](/images/2021/01/02/8e018702-ea26-48d5-8cfb-71a16bb03974.png)

```
var el = document.createElement('script');
el.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js";
el.type = "text/javascript";
document.head.appendChild(el);
```

```
// Use the following in a bookmarklet:
javascript:var el=document.createElement('script');el.src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js";el.type = "text/javascript";document.head.appendChild(el);
```

Remove multiple keys from an object
_.omit

Divide array in batch
_.chunk

Remove elements from an array at index
_.pullAt


Implementation in Native
https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore