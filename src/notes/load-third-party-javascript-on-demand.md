---
layout: note
title: How to load third-party Javascript on demand
description: A small script to dynamically (and, asynchronously) load third-party Javascript files on demand, with de-duplication and retries.
keywords: script
emoji: 🎿
date: 2021-01-22T11:05:00+05:30
tags:
  - webdev
  - javascript
  - recipe
---

A small script to dynamically (and, asynchronously) load third-party Javascript files on demand.

* It inserts a `<script>` tag in the head to load the script.
* Checks if a `<script>` tag already exists with the same source to avoid duplicate script tags.
  * I use it with a Web Component based library where another component may already have loaded the script.
* Callbacks after successful or failed load.
* **Note:** I also use a _retry_ logic (that removes and re-attaches the script tag) to avoid temporary network failures. I have not included it here for simplicity.

```javascript
/**
 * @param {string} src The URL of the script.
 * @callback onLoadSuccessCallback Callback when script is loaded successfully.
 * @callback onLoadErrorCallback Callback when the script fails to load.
 */
function loadScript(src, onLoadSuccessCallback, onLoadErrorCallback) {
	if (!src) {
		console.error("Error: missing src");
		return;
	}

	// Check if the script is already loaded
	if (document.querySelector('script[src="' + src + '"]')) {
		// Script already loaded...
		console.warn("Script Already Loaded. Skipping: ", src);
		onLoadSuccessCallback();
	} else {
		// Script not already leaded; load script...
		// Create script tag
		const js = document.createElement('script');
		js.src = src;
		js.setAttribute("async", "");

		// Setup success callback
		if (onLoadSuccessCallback) {
			js.onload = onLoadSuccessCallback;
		}

		// Setup error callback
		if (onLoadErrorCallback) {
			js.onerror = onLoadErrorCallback;
		}

		// Add the script tag to <head>
		document.head.appendChild(js);
	}
};
```

Use it like this:
```javascript
loadScript('url/or/path/to/script.js', () => {
	console.log("Script loaded");
	// Do something with the script.
}, () => {
	console.error("Script load failed");
	// Handle error.
});
```
