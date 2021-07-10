/**
	Setup envoirnment variables to used in the project.
	For local development, setup the variables in an ".env" file. See ".env.example" file.
	These can be accessed anywhere in the project as:
		env.VARIABLE_NAME
*/

module.exports = {
	BUILD_ENV: process.env.BUILD_ENV || 'development',

	BASE_URL: process.env.URL || process.env.BASE_URL || '',	// Netlify sets the 'URL' env variable

	GA_KEY: process.env.GA_KEY || '',
	MS_CLARITY_TAG: process.env.MS_CLARITY_TAG || '',

	// How to setup WebMentions: https://sia.codes/posts/webmentions-eleventy-in-depth/
	WEBMENTION_IO_TOKEN: process.env.WEBMENTION_IO_TOKEN || '',
}
