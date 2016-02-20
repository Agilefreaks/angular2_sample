"use strict";

var gulp = require('gulp');
var copy = require('./copy');
var compile = require('./compile');
var bundle = require('./bundle');
var min = require('./min');
var env = require('./env');

var copyFiles = gulp.parallel(
	copy.lib,
	copy.content
);

var prepareSASS = gulp.series(
	compile.sass,
	bundle.css
);

var prepareTS = gulp.series(
	compile.ts,
	bundle.js
);

var buildDev = gulp.parallel(
	copyFiles,
	prepareSASS,
	prepareTS
);

var buildProd = gulp.parallel(
	copyFiles,
	gulp.series(
		prepareSASS,
		min.css
	),
	gulp.series(
		prepareTS,
		min.js
	)
);

var build = function(cb) {
	return env.isProduction() ? buildProd(cb) : buildDev(cb);
}

module.exports = {
	app: build
};
