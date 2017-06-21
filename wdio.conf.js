exports.config = {

	maxInstances: 1,

	specs: [ './test/spec/**/*.js' ],

	suites: {
		login: [
			'./test/spec/login/login.spec.js',
			'./test/spec/contacts/contacts.spec.js'
		],
	},

	exclude: [
		'./test/spec/customer-portal-core-ci.spec.js',
		'./test/spec/customer-portal-core-scenario.spec.js'
	],
	capabilities: [{
		browserName: 'firefox'
	}],
	sync: true,
	logLevel: 'result',
	coloredLogs: true,
	screenshotPath: './errorShots/',
	baseUrl: 'http://172.31.9.88:8086/',
	waitforTimeout: 100000,
	framework: 'mocha',
	reporters: ['spec'],
	reporterOptions: {
		outputDir: './'
	},
	mochaOpts: {
		ui: 'bdd'
	},

	onPrepare: function() {

	},
	before: function() {
		var chai = require('chai');
		global.expect = chai.expect;
		chai.Should();

		browser.windowHandleSize( {
			width: 1680,
			height: 1050
		} );
	},
	after: function(failures, pid) {
		// do something
	},
	onComplete: function() {
		// do something
	}
};