'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var paths = require('./paths');

function clean(filesGlob) {
	return gulp.src(filesGlob, { read: false, allowEmpty: true })
		.pipe(plugins.rimraf())
}

function cleanLib() {
	return clean(paths.libDir);
};

function cleanJS() {
	return clean(paths.jsDir);
};

function cleanCSS() {
	return clean(paths.cssDir);
};

function cleanMaps() {
	return clean(paths.mapsDir);
};

function cleanKarma() {
	return clean(paths.karmaDir);
}

var cleanAll = gulp.parallel(cleanLib, cleanJS, cleanCSS, cleanMaps, cleanKarma)

module.exports = {
	all: cleanAll,
	lib: cleanLib,
	js: cleanJS,
	css: cleanCSS,
	karma: cleanKarma
}