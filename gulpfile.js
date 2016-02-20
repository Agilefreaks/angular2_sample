/// <binding BeforeBuild='default' Clean='clean' />
"use strict";

var gulp = require('gulp');
var clean = require('./gulp/clean');
var build = require('./gulp/build');
var specs = require('./gulp/specs');
var serve = require('./gulp/serve');

gulp.task('clean', clean.all);

gulp.task('build', build.app);

gulp.task('unit', specs.unit);

gulp.task('tdd', specs.tdd);

gulp.task('serve', serve.live);

gulp.task('default', build.app);
