---
layout: note
title: Eleventy plugin for efficient CodePen embeds
description: Embed CodePen.io Pens into your 11ty website by using a ShortCode. It directly embeds an iFrame for efficiency (without loading CodePen's Javascript).
keywords: codepen, 11ty, 11ty-plugin, eleventy-plugin
emoji: 🎈
date: 2021-01-24T21:19:50+05:30
tags:
  - eleventy
  - library
  - javascript
links:
  - https://github.com/manustays/eleventy-plugin-codepen-iframe
---

Yet another 11ty plugin to embed CodePens into you pages. The other plugins that I had seen use CodePen's preferred Javascript based embeds. It requires loading an external Javascript (though, a small one) into your page. The Codepen embed Javascript finally creates an `<iframe>` anyway!

I wanted a more efficient solution for my blog by directly embedding the Pen's iFrame; therefore I wrote this plugin.

## Usage

#### STEP 1: Install the plugin:

```bash
npm install --save-dev @manustays/eleventy-plugin-codepen-iframe
```

#### STEP 2: Include it in your `.eleventy.js` config file:

```js
const embedCodePen = require("@manustays/eleventy-plugin-codepen-iframe");

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(embedCodePen, {
		tabs: "js,result"
	});
};
```

> ⚠ You’re only allowed one module.exports in your configuration file! If one already exists, copy the content of the above into your existing module.exports function.

#### STEP 3 – Use it in your templates like this:

```html
{{ '{% CodePen "https://codepen.io/abhiweb/pen/wvzNaQM", "result", "220" %}' | safe }}
```

## Config Options
These options set the default values for embedded Pens. They can be overridden while embedding individual Pens.

| Option   | Type    | Default   | Description              |
| -------- | ------- | --------- |--------------------------|
| tabs     | string  | "result"  | Default comma-separated string of the tabs of the codepen to display |
| height   | number  | 300       | Default height of Pen iFrames |
| width    | string  | "100%"    | Default width of Pen iFrames |
| theme    | string  | "dark"    | Default theme for all Pens |
| user     | string  | ""        | CodePen user-id to use if only Pen-id is provided |
| class    | string  | "codepen" | CSS classes to add to the iFrame |

## Demo

Check it out live in my other post **[A Regular Expression to filter invalid names](https://abhi.page/notes/regex-to-validate-names/)**
