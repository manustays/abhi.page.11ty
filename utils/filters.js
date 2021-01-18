const CleanCSS = require("clean-css");
const { DateTime } = require('luxon');

module.exports = {

	// Minify CSS: https://github.com/jakubpawlowicz/clean-css
	cssmin: code => new CleanCSS({
		level: {
			1: { specialComments: "0" },
			2: { mergeMedia: true }
		}
	}).minify(code).styles,


    dateFormat: function (date, format) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(
            String(format)
        );
	},


    dateISO: date => DateTime.fromJSDate(date, { zone: 'utc' }).toISO({
		includeOffset: false,
		suppressMilliseconds: true
	}),


	// Useful to change property of an object in the Nunjucks 'set' method which is fairly limited
	mergeObjectFilter: (obj1, obj2) => { return { ...obj1, ...obj2 } },

	// Reduce length of a large Array
	trimArray: (array, max_length) => {
		if (array && array.length && array.length > max_length) {
			array.length = max_length;
		}
		return array;
	},

	// Trim "https://" and trailing '/' from links
	shortURL: (url) => url.replace(/^https?:\/\//i, '').replace(/\/$/, ''),
}
