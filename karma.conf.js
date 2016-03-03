/**
 * This setup is based on Julie Ralph's `ng2-test-seed` project.
 * See https://github.com/juliemr/ng2-test-seed
 * Hopefully Angular2 and Karma integration will be more seamless in the future.
 * Unit tests are currently only implemented to run against the development target.
 */

module.exports = function(karma) {
	var config = {
		basePath: '',
		frameworks: ['jasmine'],

		files: [
			/** Paths loaded by Karma */
			{ pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true },
			{ pattern: 'node_modules/systemjs/dist/system.src.js', included: true },
			{ pattern: 'node_modules/es6-shim/es6-shim.js', included: true },
			{ pattern: 'node_modules/rxjs/bundles/Rx.js', included: true },
			{ pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true },
			{ pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true },
			{ pattern: 'node_modules/angular2/bundles/router.dev.js', included: true },
			{ pattern: 'node_modules/angular2/bundles/http.dev.js', included: true },
			{ pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true },
			{ pattern: 'karma.shim.js', included: true },

			/** Paths loaded via module imports */
			{ pattern: 'karma/app/**/*.js', included: false },

			/** Paths to unit tests */
			{ pattern: 'karma/tests/unit/**/*.spec.js', included: false }
		],

		reporters: ['progress', 'json'],

		jsonReporter: {
      stdout: true,
      outputFile: 'results.json' // defaults to none 
    },

		singleRun: true,
		port: 9876,
		colors: true,
		logLevel: karma.LOG_INFO,

		browsers: ['PhantomJS2'],
	};

	karma.set(config);
};
