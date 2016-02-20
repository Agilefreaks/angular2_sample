'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var paths = require('./paths');

function bundle(files, baseDir, target) {
	return gulp.src(files, { base: baseDir })
		.pipe(plugins.concat(target))
		.pipe(gulp.dest('.'));
}

function bundleJS() {
	return bundle([paths.js, "!" + paths.minJs, "!" + paths.concatJsDest], paths.jsDir, paths.concatJsDest)
		.pipe(gulp.dest('.'));
};

function bundleCSS() {
	return bundle([paths.css, "!" + paths.minCss, "!" + paths.concatCssDest], paths.cssDir, paths.concatCssDest)
		.pipe(gulp.dest("."));
};

module.exports = {
	js: bundleJS,
	css: bundleCSS
}