---
layout: note
title: Eleventy plugin for generating social images (using SVG)
description: How I created an eleventy plugin to automatically generate social-images for your website and blog posts.
keywords: social-image, social-sharing-image, 11ty, 11ty-plugin, eleventy-plugin
emoji: 🎈
date: 2021-01-28T20:13:00+05:30
tags:
  - 11ty
  - library
  - javascript
links:
  - https://github.com/manustays/eleventy-plugin-generate-social-images
---

While porting [my website](https://abhi.page/) to [11ty](https://www.11ty.dev/), I wrote my own [plugin](https://github.com/manustays/eleventy-plugin-generate-social-images) to automatically generated social-sharing-images for my [articles](https://abhi.page/notes).

> A social-sharing-image shows as a thumbnail for a website/blogpost when shared on social media.
>
> This plugin generates such images automatically using the title of your blogposts/pages. For a live example, share this page on a social media like [Twitter](https://twitter.com/intent/tweet?url=https://abhi.page/notes/11ty-plugin-generate-social-images) or [LinkedIn](https://www.linkedin.com/shareArticle?mini=true&url=https://abhi.page/notes/11ty-plugin-generate-social-images&title=&summary=&source=)!

Images are generated in PNG format in a standard 1200×628px size that is suitable for sharing with most social networks.


## Why another plugin?
* I started with using [Stephanie Eckles](https://twitter.com/5t3ph)'s excellent plugin [@11tyrocks/eleventy-plugin-social-images](https://github.com/5t3ph/eleventy-plugin-social-images).
  * She has written an excellent post about her plugin [here](https://dev.to/5t3ph/automated-social-sharing-images-with-puppeteer-11ty-and-netlify-22ln).
  * It uses HTML-based templating for easily configuring the social images.
  * It uses a Puppeteer build script to generate images from the HTML template..
  * I would recommend this plugin for most folks!
* But, I ran into issues running Puppeteer with my WSL2 based dev setup.
* I also wanted to keep the build process lighter (Puppeteer uses a headless Chrome to render and generate the screenshot).
* Taking inspiration from another amazing plugin -- [11ty's Image Plugin](https://www.11ty.dev/docs/plugins/image/) -- the idea was to efficiently generate the social images using SVG and then convert it into JPEG/PNG using [Sharp](https://github.com/lovell/sharp)!


## Who is this plugin for?
* Want to automatically generate social-sharing-images for your Eleventy-based website (_of course!_)
* Don't want Puppeteer dependency
* Want to use SVG to style your social images


## Demo
This is how it looks like configured for one of my blogposts:
![](https://abhi.page/img/preview/how-to-load-third-party-javascript-on-demand.png)


## How does the plugin work?
1. Image is created using an SVG template. Users can configure the design or pass custom SVG snippets to be inserted.
2. Title text is [wrapped](https://github.com/manustays/eleventy-plugin-generate-social-images/blob/4df9ce4ad93036bb842728f4684b12954316f5e2/utils/generateSocialImage.js#L9) by breaking it into multiple lines at a pre-configured max-length-per-line. This was necessary because SVG does not support text-wrapping natively and the Sharp library does not support `<foreignObject>`.
3. The title lines are [sanitized](https://github.com/manustays/eleventy-plugin-generate-social-images/blob/4df9ce4ad93036bb842728f4684b12954316f5e2/utils/generateSocialImage.js#L39) and inserted into the SVG.
4. The SVG image is converted into PNG using the [Sharp library](https://sharp.pixelplumbing.com).
5. Author image is superimposed onto the generated PNG using [Sharp's `composite()` function](https://sharp.pixelplumbing.com/api-composite).


## Installation & Usage
See the latest [installation and usage guide on this plugin's Github page](https://github.com/manustays/eleventy-plugin-generate-social-images).

**Note:** For a complete implementation example, [checkout my website on Github](https://github.com/manustays/abhi.page.11ty).
