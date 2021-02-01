---
layout: note
title: Easily show a range/gauge with HTML <meter> element
description: Use the HTML <meter> element to easily show a range of values. It automatically color-codes the too-high or too-low values!
keywords: html5, ui, meter, range, gauge
emoji: 🌡
date: 2021-02-01T12:10:00+05:30
tags:
  - html
  - design
links:
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
---

I really had no idea about the HTML `<meter>` element that can show a range of values, until I read [this tweet](https://twitter.com/IMAC2/status/1352603699944816645) by [Álvaro Trigo](https://twitter.com/IMAC2) :)


### Example:
```html
<meter min="0" max="100"
	low="30" high="80" optimum="60"
	value="70">
```

> #### Result:
> <meter min="0" max="100" low="30" high="80" optimum="60" value="70">



**Note:** The `<meter>` tag should not be used to show the progress of a task. For that, use the [`<progress> tag`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress).
