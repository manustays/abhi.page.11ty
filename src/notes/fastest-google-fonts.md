---
layout: note
title: Fastest Google Fonts
description: How to load Google Fonts in the fastest way that makes Lighthouse happy and fights FOUT
emoji: 🏃‍♀️
date: 2021-01-16T23:08:37+05:30
tags:
  - webdev
  - css
links:
  - https://csswizardry.com/2020/05/the-fastest-google-fonts/
  - https://css-tricks.com/how-to-load-fonts-in-a-way-that-fights-fout-and-makes-lighthouse-happy/
---

* Preconnect to Google Font server.
* Use `preload` to asynchronously load the font fast on supported browsers.
* In the link to the main font stylesheet:
  * Set `media=print` on the stylesheet to stop loading it during page load.
  * On page load, set `media=all` on stylesheet (using Javscript) to load the font.
* As a fallback for browsers where Javascript is disabled, include a normal link to the stylesheet within `<noscript>` tag.

Here is a recommended snippet:
```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="preload"
  as="style"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
  media="print"
  onload="this.media='all'" />
<noscript>
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
</noscript>
```
