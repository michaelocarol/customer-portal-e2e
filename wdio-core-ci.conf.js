exports.config = {

	maxInstances: 1,

	specs: [ './test/spec/customer-portal-core-ci.spec.js' ],

	services: ['phantomjs'],
	sync: true,
	logLevel: 'result',
	coloredLogs: true,
	screenshotPath: './errorShots/',
	baseUrl: 'http://172.31.9.88:8086/',
	waitforTimeout: 10000,
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
