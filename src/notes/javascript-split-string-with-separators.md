---
layout: note
title: Use RegEx to split a string in Javascript (preserving separators)
description: How to use the regular-expression lookbehind pattern to split a string by one or more separators while preserving the separators in the split sub-strings.
keywords: lookbehind
emoji: ✂
date: 2021-02-01T16:10:00+05:30
tags:
  - regex
  - javascript
  - recipe
---

Use the Javascript split() function with a `Positive Lookbehind Regular Expression` to split a string while preserving the separators in the sub-strings:

```javascript
split(/(?<=[<separator characters go here>])/)
```

## What is Lookbehind?
Lookbehind in regular-expression allows to match a pattern only when it follows the given lookbehind pattern (without actually matching it).

### Syntax
* Positive lookbehind: `(?<=Y)X` matches X if there is Y before it.
* Negative lookbehind: `(?<!Y)X` matches X if there is no Y before it.

***One limitation*** is that Javascript only supports fixed length lookbehind patterns. So, you cannot use it to split by a separator pattern with variable length.

## Demo
{% CodePen "https://codepen.io/abhiweb/pen/MWbYPLO", "js,result", "300" %}
