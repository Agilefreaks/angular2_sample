'use strict';

var gulp = require('gulp');
var eventStream = require('event-stream');
var plugins = require('gulp-load-plugins')();
var paths = require('./paths');
var env = require('./env');

function compileTSCore(filesGlob, baseDir, destDir, project) {
	var tsSrcInlined = gulp.src(filesGlob)
		.pipe(plugins.tslint())
		.pipe(plugins.tslint.report('verbose'))
		.pipe(plugins.preprocess({ context: env }))
		.pipe(plugins.inlineNg2Template({ base: baseDir, useRelativePaths: true }));
	return eventStream.merge(tsSrcInlined, gulp.src(paths.typings))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.typescript(project))
		.pipe(plugins.sourcemaps.write())
		.pipe(gulp.dest(destDir));
};

function compileTS() {
	var filesGlob = paths.ts;
	var baseDir = paths.tsDir;
	var destDir = paths.jsDir;
	var project = plugins.typescript.createProject(paths.tsConfig, {
		typescript: require('typescript'),
		outFile: 'app.js'
	});

	return compileTSCore(filesGlob, baseDir, destDir, project);
}

function compileSASS() {
	return gulp.src(paths.sass)
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.sass())
		.pipe(plugins.sourcemaps.write())
		.pipe(gulp.dest(paths.cssDir));
};

module.exports =	{
	ts: compileTS,
	sass: compileSASS,
	customTS: compileTSCore
}