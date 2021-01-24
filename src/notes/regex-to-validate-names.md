---
layout: note
title: A Regular Expression to filter invalid names
description: A regular expression to be used as a basic filter to detect invalid Indian names. Useful for quick frontend validation.
keywords: regex
emoji: 🔤
date: 2021-01-17T21:08:00+05:30
tags:
  - regex
  - recipe
---

A regular expression that can be used as a basic filter to detect invalid names.

* I use it in an Indian context. May not be useful for others.
* Use it with an 'i' RegEx flag to ignore case.
* Filters out spelling mistakes & gibberish entries; _but not all invalid entries!_
* Similarly useful for other English nouns as well, and not just names.
* Useful for quick frontend validation in scenarios where users may tap gibberish to quickly skip a mandatory 'name' parameter.

```regex
^(?!(?:(?:([a-z]) *\1(?: *\1)*)|(?:.*?(?:(?:(?:^|[^d])([a-z])\2\2)|(?:d([a-df-z])\3\3)).*)|(?:.*?([a-z]{3,})\4\4).*|(?:.*(?:^|[^a-z])[^aeiou \.]{4,}(?:$|[^a-z]).*))$)(?:[a-z]+\.? ){0,2}[a-z]+$
```

### Logic
1. Allows up to three words (first & last name).
1. Allows abbreviations (ending in '.') in all but the last word.
1. Rejects repetition of any subset of characters.
1. Uses rules of pronounceable English syllables to filter bad entries _(based on my limited research)_:
   1. A consonant cannot be consecutively repeated.
   1. A vowel cannot be consecutively repeated more than twice.
      1. Exception: _e_ that can be repeated thrice for certain Indian names, for example, those ending with 'deee'.
1. ... _(more to be updated soon)_

***Note:***
I had written this long back by analyzing invalid entries made in a fin-tech app used by agents to make entries on behalf of other customers. I will update the exact logic and describe parts of the regex soon!

Test it here & get a sample code in Javascript:
{% CodePen "https://codepen.io/abhiweb/pen/wvzNaQM", "result", "220" %}
