"use strict";

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var karma = require('karma');
var paths = require('./paths');
var clean = require('./clean');
var compile = require('./compile');

function getTypescriptProject(tsConfigFile) {
	return plugins.typescript.createProject(
		tsConfigFile,
		{ typescript: require('typescript') }
	);
}

function compileSource() {
	var project = getTypescriptProject(paths.tsConfig);
	return compile.customTS(
		paths.ts,
		paths.tsDir,
		paths.karmaJSDir,
		project
	);
}

function compileUnitTests() {
	var project = getTypescriptProject(paths.unitTestsTSConfig);
	return compile.customTS(
		paths.unitTests,
		paths.unitTestsDir,
		paths.karmaJSTestsDir,
		project
	);
}

function compileTypeScriptLive() {
	gulp.watch(paths.ts, compileSource);
	gulp.watch(paths.unitTests, compileUnitTests);
}

function runKarmaCustom(done, options) {
	options = options || {};
	options.configFile = options.configFile || (__dirname + '/../karma.conf.js');
	new karma.Server(options, done).start();
}

function runKarma(done) {
	runKarmaCustom(done);
}

function runKarmaContinuosly(done) {
	runKarmaCustom(done, { singleRun: false, autoWatch: true });
}

var prepareForKarmaRun = gulp.series(
	clean.karma,
	gulp.parallel(
		compileSource,
		compileUnitTests
	)
);

var runUnitTests = gulp.series(
	prepareForKarmaRun,
	runKarma,
	clean.karma
);

var runUnitTestsContinuously = gulp.series(
	prepareForKarmaRun,
	gulp.parallel(
		runKarmaContinuosly,
		compileTypeScriptLive
	)
);

module.exports = {
	unit: runUnitTests,
	tdd: runUnitTestsContinuously
}