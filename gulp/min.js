'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var paths = require('./paths');

function min(source, baseDir, minifyPlugin) {
	return gulp.src(source, { base: baseDir })
		.pipe(plugins.sourcemaps.init({loadMaps: true}))
		.pipe(minifyPlugin())
		.pipe(plugins.sourcemaps.write("../maps"))
		.pipe(gulp.dest(baseDir));	
}

function minJS() {
	return min(paths.concatJsDest, paths.jsDir, plugins.uglify);
};

function minCSS() {
	return min(paths.concatCssDest, paths.cssDir, plugins.cssmin);
};

module.exports = {
	js: minJS,
	css: minCSS
}