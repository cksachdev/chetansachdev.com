---
title: Lodash - quick experiments in Chrome DevTools
date: 2021-01-02 01:07:30
tags:
  - JavaScript
  - Lodash
  - Chrome
categories:
  - Development
description: How to load Lodash into any web page via Chrome DevTools console so you can experiment with Lodash methods without a project setup.
---

Want to try out a Lodash method quickly without creating a project? You can inject Lodash into any page using the Chrome DevTools console.

## Step 1: Allow JavaScript on the page (if blocked)

If you're on a page that blocks scripts, navigate to:

```
chrome://settings/content/javascript
```

And enable JavaScript for that site.

## Step 2: Inject Lodash via the console

Open DevTools (`Cmd + Option + J` on Mac, `Ctrl + Shift + J` on Windows), then paste:

```javascript
var el = document.createElement('script');
el.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js";
el.type = "text/javascript";
document.head.appendChild(el);
```

Now `_` is available in the console.

## Step 3: Experiment with Lodash methods

Some useful ones to try:

**Remove specific keys from an object:**
```javascript
_.omit(obj, ['key1', 'key2'])
```

**Split an array into chunks:**
```javascript
_.chunk([1, 2, 3, 4, 5], 2)
// => [[1, 2], [3, 4], [5]]
```

**Remove elements from an array by index:**
```javascript
_.pullAt(array, [0, 2])
```

## Bookmarklet version

Save this as a bookmark to inject Lodash into any page with one click:

```
javascript:var el=document.createElement('script');el.src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js";el.type="text/javascript";document.head.appendChild(el);
```

## Don't always need Lodash?

Many Lodash methods have native JavaScript equivalents. See:
[You Don't Need Lodash/Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore)
