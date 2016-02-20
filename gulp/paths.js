'use strict';

var paths = {
	webroot: "./wwwroot/",
	tsDir: "./app/",
	sassDir: "./content/sass/",
	fontsDir: "./content/fonts/",
	imagesDir: "./content/images/",
	karmaDir: "./karma/",
	unitTestsDir: "./tests/unit/"
};

paths.jsDir = paths.webroot + "js/";
paths.cssDir = paths.webroot + "css/";
paths.mapsDir = paths.webroot + "maps/";
paths.libDir = paths.webroot + "lib/";
paths.fontsDistDir = paths.webroot + "fonts/";
paths.imagesDistDir = paths.webroot + "images/";
paths.karmaJSDir = paths.karmaDir + 'app/';
paths.karmaJSTestsDir = paths.karmaDir + 'tests/unit/';

paths.ts = paths.tsDir + "**/*.ts";
paths.templates = paths.tsDir + "**/*.html";
paths.js = paths.jsDir + "**/*.js";
paths.css = paths.cssDir + "**/*.css";
paths.typings = ["./typings/main.d.ts", "./node_modules/angular2/typings/browser.d.ts"];
paths.sass = paths.sassDir + "**/*.s+(a|c)ss";
paths.fonts = paths.fontsDir + "**/*.+(otf|eot|svg|ttf|woff|woff2)";
paths.images = paths.imagesDir + "**/*.+(jpg|jpeg|png|gif)";
paths.minJs = paths.jsDir + "**/*.min.js";
paths.minCss = paths.cssDir + "**/*.min.css";
paths.tsConfig = paths.tsDir + 'tsconfig.json';
paths.concatJsDest = paths.jsDir + "app.js";
paths.concatCssDest = paths.cssDir + "app.css";
paths.lib = paths.webroot + "lib/**/*.*";
paths.maps = paths.webroot + "maps/**/*.*";
paths.unitTests = paths.unitTestsDir + '**/*.ts';
paths.unitTestsTSConfig = paths.unitTestsDir + 'tsconfig.json';

module.exports = paths;
