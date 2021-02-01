---
layout: note
title: Use RegEx to split a string in Javascript preserving separator(s)
description: How to use the regular-expression look-behind pattern to split a string by one or more separators while preserving the separators in the split sub-strings.
keywords: regex
emoji: ✂
date: 2021-02-01T16:00:00+05:30
tags:
  - regex
  - javascript
  - recipe
---

Use the Javascript split() function with a `Positive Look-behind Regular Expression` to split a string while preserving the separators in the sub-strings:

```javascript
split(/(?<=[<separator characters go here>])/)
```

> Look-behind in regular-expression allows to match a pattern only when it follows the given look-behind pattern (without actually matching it).

***One limitation*** is that Javascript only supports fix length look-behind regular expression patterns. So, you cannot split by a separator pattern wit variable length.

Test it here & get a sample code in Javascript:
{% CodePen "https://codepen.io/abhiweb/pen/MWbYPLO", "js,result", "300" %}
