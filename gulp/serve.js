"use strict";

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var history = require('connect-history-api-fallback')
var paths = require('./paths');
var build = require('./build');
var compile = require('./compile');
var env = require('./env');

function compileAppLive() {
	gulp.watch([paths.ts, paths.templates], compile.ts);
	gulp.watch(paths.sass, compile.sass);
}

function startConnect() {
	return plugins.connect.server({
		root: 'wwwroot',
		livereload: true,
		port: env.PORT,
		middleware: function (connect, opt) {
			return [history()];
		}
	});
}

var serveLive = gulp.series(
	build.app,
	gulp.parallel(
		compileAppLive,
		startConnect
	)
);

module.exports = {
	live: serveLive
}
