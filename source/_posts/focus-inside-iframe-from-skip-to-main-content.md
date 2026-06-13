---
title: Focus inside an iframe from a "Skip to main content" link
date: 2020-02-08 04:23:50
tags:
  - Accessibility
  - HTML
  - jQuery
categories:
  - Development
description: How to make a "Skip to main content" accessibility link correctly move focus inside an iframe using jQuery, for better keyboard navigation compliance.
---

A "Skip to main content" link is an accessibility requirement that lets keyboard users bypass navigation. If your main content is inside an `<iframe>`, a regular anchor link won't focus inside the frame — you need a small JavaScript fix.

## The problem

A standard `<a href="#id">` link can't move focus into an iframe's content window. Keyboard users get stuck.

## Solution

**Step 1: Add the skip link**

```html
<div class="skipnav">
  <a tabindex="1" href="#groupFrame">Skip to main content</a>
</div>
```

**Step 2: Intercept the click and focus inside the iframe**

```javascript
jQuery(document).ready(function() {
  jQuery('a[href="#groupFrame"]').click(function(e) {
    e.preventDefault();
    setTimeout(setFocusIframe, 100);
    return false;
  });

  function setFocusIframe() {
    console.log("Focusing on iframe!");
    jQuery("#groupFrame")[0].contentWindow.focus();
  }
});
```

The `setTimeout` gives the browser a moment to settle before attempting to set focus on the iframe's `contentWindow`. This reliably moves keyboard focus inside the frame.

> **Note:** The iframe and the parent page must be on the **same origin** for `contentWindow.focus()` to work. Cross-origin iframes block this due to browser security policies.
