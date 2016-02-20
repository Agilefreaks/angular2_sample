var PRODUCTION_ENV = 'production';
var STAGING_ENV = 'staging';
var DEVELOPMENT_ENV = 'development';
var TEST_ENV = 'test';

var env = {
	NODE_ENV: process.env.NODE_ENV || DEVELOPMENT_ENV,
	PORT: process.env.PORT || '5000',

	isProduction: function () { return this.NODE_ENV === PRODUCTION_ENV; },
	isTest: function () { return this.NODE_ENV === TEST_ENV; }
};

env.APP_CONFIG = require('./config/' + env.NODE_ENV);

module.exports = env;
