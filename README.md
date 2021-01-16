# An 11ty Website & Blog
Kumar Abhishek's personal website & blog built with [Eleventy](https://www.11ty.dev).

---

## 🌟 Features
1. Built with [Eleventy](https://www.11ty.dev)!  [<small>(docs)</small>](https://www.11ty.dev/docs)
1. [Netlify CMS](https://www.netlifycms.org): easy blog & website configuration management.
1. Simple stack. Minification/bundling using internal 11ty plugins.

## 🔗 Table Of Contents
1. [Project Structure](#-project-structure)


## 🗃 Project Structure
* 📄🔧 [**.eleventy.js**](.eleventy.js)  `All project technical configurations go here`
* 📂 [**src/**](/src)  `Main source directory. Top-level/custom webpages are created right here`
  * 📄 [**index.njk**](/src/index.njk)  `The home page`
  * 📂✍ [**blog/**](/src/blog)  `Create blog posts here`
    * 📄 [**index.njk**](/src/blog/index.njk)  `The blog listing page`
	* 📄 [**blog-tag-pages.njk**](/src/blog/blog-tags.njk)  `Page template to list posts for individual tags`
  * 📂🔧 [**_data**](/src/_data)  `All the website configuration and data go here`
    * 📄🔧 [**website.yaml**](/src/_data/website.yaml)  `Top configurations, like, domain, logo, title, SEO, etc`
	* 📑🔧 [**skills.yaml**](/src/_data/skills.yaml)  `List your skills here`
	* 📑🔧 [**work.yaml**](/src/_data/developers.yaml)  `List your professional experiences here`
	* 📄🔧 [**env.yaml**](/src/_data/env.yaml)  `Secret configurations as envoirnment variables`
  * 📂👩‍💻 [**_layouts**](/src/_layouts)  `Reusable templates for various page types`
    * 📄⭐ [**base.njk**](/src/_layouts/base.njk)  `Main template with outermost common code used by all pages`
	* 📄 [**blog_post.njk**](/src/_layouts/blog_post.njk)  `Template for blog post pages ideally written in markdown`
	* 📄 [**page.njk**](/src/_layouts/page.njk)  `Template for generic pages ideally written in markdown`
  * 📂🧩 [**_includes**](/src/_includes)  `All build-time reusable components go here`
	* 📄 [**header.njk**](/src/_includes/header.njk)  `Top navigation bar in every page`
	* 📄 [**footer.njk**](/src/_includes/footer.njk)  `Footer section at the bottom of every page`
	* 📄 [**blogslist.njk**](/src/_includes/blogslist.njk)  `List of all blog posts with pagination`
    * 📂🎨 [**css**](/src/_includes/css)  `CSS files - inlined into HTML during build`
	  * 📄 [**base.css**](/src/_includes/css/base.css)  `Common CSS rules used in every page`
	  * 📄 [**blog.css**](/src/_includes/css/blog.css)  `CSS rules for pages using the 'blog' or 'page' template`
	  * 📄 [**header.css**](/src/_includes/css/header.css)  `CSS rules for top navigation menu`
	  * 📄 [**footer.css**](/src/_includes/css/footer.css)  `CSS rules for footer section`
	  * 📄 [**flex.css**](/src/_includes/css/flex.css)  `Helper classes for CSS Flexbox`
	* 📁 [**js**](/src/_includes/js)  `Javascript files - inlined into HTML during build`
  * 📁🖼 [**assets**](/src/assets)  `Static assets like images, icons, etc`
* 📂 [**utils/**](/utils)  `11ty build-time custom utilities...`
  * 📄 [**shortcodes.js**](/utils/shortcodes.js)  `Reusable short markup (HTML) snippets` [<small>(docs)</small>](https://www.11ty.dev/docs/shortcodes)
  * 📄 [**filters.js**](/utils/filters.js)  `Custom filters for 11ty to be used in templates to manipulate data` [<small>(docs)</small>](https://www.11ty.dev/docs/filters)


## Credits
1. Theme inspired from [Hylia Starter Kit](https://github.com/hankchizljaw/hylia)
