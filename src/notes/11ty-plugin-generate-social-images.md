---
layout: note
title: Eleventy plugin for generating social images (using SVG)
description: How I created an eleventy plugin to automatically generate social-images for your website and blog posts.
keywords: social-image, social-sharing-image, 11ty, 11ty-plugin, eleventy-plugin
emoji: 🎈
date: 2021-01-28T20:13:00+05:30
tags:
  - eleventy
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

#### STEP 1: Install the package:
```bash
npm install @manustays/eleventy-plugin-generate-social-images
```

#### STEP 2: Include it in your `.eleventy.js` config file:

```js
const generateSocialImages = require("@manustays/eleventy-plugin-generate-social-images");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(generateSocialImages, {
    promoImage: "./src/img/my_profile_pic.jpg",
    outputDir: "./_site/img/preview",
    urlPath: "/img/preview",
	siteName: "abhi.page/",
	titleColor: "#fedb8b"
  });
};
```

#### Step 3: Use in your template
For example, in your `base.njk` template file, use it in the `<head>` for generating social image meta tags:
```html
<meta property="og:image" content="{{ '{% GenerateSocialImage title %}' }}" />
<meta name="twitter:image" content="{{ '{% GenerateSocialImage title %}' }}" />
```


## Config Options

| Option      | Type   | Default       | Description |
| ----------- | ------ | ------------- |-------------|
| promoImage  | string |               | Path to a promo Image (ideally, circular) that will be embedded in the social-images |
| outputDir   | string | "./\_site/img/preview" | Project-relative path to the output directory where images will be generated |
| urlPath     | string | "/img/preview" | A path-prefix-esque directory for the &lt;img src&gt; attribute. e.g. `/img/` for `<img src="/img/MY_IMAGE.jpeg">` |
| siteName    | string |               | The website name to show on the social-image |
| titleColor  | string | "white"       | The color of the page-title |
| bgColor     | string |               | Optional background color. Otherwise, shows the gradient pattern |
| terminalBgColor| string | "#404040"  | Background color of the terminal window design |
| hideTerminal  | boolean | false      | If true, hides the terminal window design behind the title |
| customSVG     | string  |            | Custom SVG code to be added to the image. Use this to add your own design or text anywhere on the image |
| customFontFilename | string |        | Filename of custom local font used for title ([see **Custom Fonts**](#custom-fonts)) |
| lineBreakAt  | number | 35           | Maximum row length for wrapping the title. Required because SVG does not have auto-wrapping text. Should depends on the font used |

## Custom Fonts
The [Sharp library](https://github.com/lovell/sharp) uses librsvg that uses [fontconfig](https://www.freedesktop.org/software/fontconfig/fontconfig-user) to load external fonts. Therefore, the following steps are required:
1. Download your font file in project sub-folder. Eg: `./fonts/sans.ttf`
2. Create a file `fonts.conf` with the following content:
   ```xml
	<?xml version="1.0"?>
	<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
	<fontconfig>
		<dir prefix="default">fonts</dir>
	</fontconfig>
	```
3. Setup the following environment variable on your build server (eg: Netlify):
   ```bash
   FONTCONFIG_PATH=.
   ```

---

**Note:** For a complete implementation example, [checkout my website on Github](https://github.com/manustays/abhi.page.11ty).
