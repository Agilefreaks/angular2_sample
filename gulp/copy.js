'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var paths = require('./paths');

var libConfig = {
	baseDir: 'node_modules',
	lib: [
		require.resolve('es6-shim/es6-shim.js'),
		require.resolve('systemjs/dist/system-polyfills.js'),
		require.resolve('angular2/bundles/angular2-polyfills.js'),
		require.resolve('systemjs/dist/system.src.js'),
		require.resolve('rxjs/bundles/Rx.js'),
        require.resolve('angular2/bundles/angular2.dev.js'),
        require.resolve('angular2/bundles/router.dev.js'),
        require.resolve('angular2/bundles/http.dev.js'),
        require.resolve('jquery/dist/jquery'),
        require.resolve('bootstrap-sass/assets/javascripts/bootstrap.js')
	]
};

function copyLib() {
	return gulp.src(libConfig.lib, { base: libConfig.baseDir }).pipe(gulp.dest(paths.libDir));
};

function copyFonts() {
	return gulp.src(paths.fonts).pipe(gulp.dest(paths.fontsDistDir));
}

function copyImages() {
	return gulp.src(paths.images).pipe(gulp.dest(paths.imagesDistDir));
}

var copyContent = gulp.parallel(
	copyFonts
);

module.exports = {
	lib: copyLib,
	content: copyContent
}
