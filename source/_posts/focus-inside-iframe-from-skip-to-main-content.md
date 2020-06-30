---
title: focus inside iframe from skip to main content
category:
  - null
tags: [tag1, tag2]
author: 
top: 1
originContent: ''
categories: []
toc: false
date: 2020-02-08 04:23:50
---


```
<div class="skipnav"><a tabindex="1" href="#groupFrame">Skip to main content</a></div>
```

```
jQuery(document).ready(function() {
	jQuery('a[href="#groupFrame"]').click(function(e) {
		e.preventDefault();
		setTimeout(setFocusIframe, 100);
		return false;
	});

	function setFocusIframe() {
		console.log("Focusing on iframe!!");
		jQuery("#groupFrame")[0].contentWindow.focus();
		// jQuery("html, body").animate({ scrollTop: "0px" }, 1000, function(){
		//     jQuery('input#Name_First').focus();
		// });
	}
});

```
