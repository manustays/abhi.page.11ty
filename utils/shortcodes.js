const outdent = require('outdent');

module.exports = {

	/**
	 * IconSprite svg icon
	 *
	icon: () => name => `<svg class="icon icon--${name}" role="img" aria-hidden="true" width="24" height="24"><use xlink:href="#icon-${name}"></use></svg>`,
	*/

	/**
	 * A short text with colored dot on the left.
	 * Pass "filled" in the second 'classes' parameter to get rounded tag-like background.
	 */
	dotTag: () => (text, classes='') => `<span class="dottagbox ${classes}">${text}</span>`,

	/**
	 * Inline svg icons using the 'svgContents' filter
	 * Pass only the name (without the .svg extension) of
	 *   the icon from the 'src/assets/ico' folder
	 */
	svgico: (config) => (name, classes = '') => config.getFilter("svgContents")(`/src/assets/ico/${name}.svg`, `svgico ${classes}`).replace(/<title>[^<]+<\/title>/i, ''),


	/**
	 * A link with an arrow-head (next-icon) to the right.
	 * Uses 'svgico' shortcode for inline SVG icon.
	 * Pass "bold" in the second 'classes' parameter for bold text.
	 */
	linkArrow: (config) => (url, text, classes = '') => {
		if (!text) {
			return '';
		}
		url = url || '/';
		const trgt = url.toLowerCase().startsWith('http') ? 'rel="noopener" target="_blank"' : '';
		return `<a href="${url}" class="icolink ${classes}" ${trgt}>${text}&nbsp;&nbsp;${config.javascriptFunctions.svgico("arrow-circle-right", "clr-highlight")}`;
	},


	/**
	 * Return the current year (Used in the footer for copyright message)
	 */
	thisYear: () => () => new Date().getFullYear().toString(),


	EmbedTweet: () => (url) => {
		const id = new URL(url).pathname.split('/')[3];
		return `<iframe scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" style="height:510px; width:100%; max-width:100%;" title="Twitter Tweet" src="https://platform.twitter.com/embed/index.html?dnt=true&embedId=twitter-widget-2&frame=false&hideCard=false&hideThread=false&id=${id}&lang=en&theme=dark&widgetsVersion=ed20a2b%3A1601588405575"><p><a href="${url}" target="_blank" rel="noopener">See the Tweet</a></p></iframe>`;
	},

}
