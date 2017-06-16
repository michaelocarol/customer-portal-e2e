'use strict';

var page = require('./page');

var leftPanelNav = Object.create(page, {

	username: {
		get: function () {
			return $( '.el-col [type="text"]' );
		}
	},

	//DASHBOARD SECTION PAGE OBJECT
	getDashboard: {
		get: function () {
			return $( 'ul.el-menu.el-menu--dark > li:nth-child(1)' );
		}
	},

	//ANALYTICS SECTION PAGE OBJECTS
	getAnalytics: {
		get: function () {
			return $( 'ul.el-menu.el-menu--dark > li:nth-child(2)' );
		}
	},

	expandAnalytics: {
		value: function () {
			$( '.el-icon-wc-graph' ).click();
		}
	},

	analyticsReport: {
		get: function () {
			return $( '.el-submenu.is-opened"] .el-menu-item' );
		}
	},

	//CAMPAIGN MANAGER SECTION PAGE OBJECT
	getCampaignMgr: {
		get: function () {
			return $( 'ul.el-menu.el-menu--dark > li:nth-child(3)' );
		}
	},

	expandCampaignMgr: {
		value: function () {
			browser.waitForExist('.el-submenu .el-icon-wc-rocket',10000);
			$( '.el-submenu .el-icon-wc-rocket' ).click();
			browser.waitForVisible( 'li.el-submenu.is-opened > ul > li:nth-child(3)', 10000 );
			browser.isEnabled('li.el-submenu.is-opened > ul > li:nth-child(3)');			
		}
	},

	webSender: {
		get: function () {
			return $( 'li.el-submenu.is-opened > ul > li:nth-child(1)' );
		}
	},

	selWebSender: {
		value: function () {
			browser.waitForExist('li.el-submenu.is-opened > ul > li:nth-child(1)', 10000);
			this.webSender.click();
		}
	},

	campaigns: {
		get: function () {
			return $( 'li.el-submenu.is-opened > ul > li:nth-child(2)' );
		}
	},

	selCampaigns: {
		value: function () {
			browser.waitForExist('li.el-submenu.is-opened > ul > li:nth-child(2)', 10000);
			this.campaigns.click();
		}
	},

	contacts: {
		get: function () {
			return $( 'li.el-submenu.is-opened > ul > li:nth-child(3)' );
		}
	},

	selContacts: {
		value: function () {
			browser.waitForExist('li.el-submenu.is-opened > ul > li:nth-child(3)', 10000);
			this.contacts.click();
		}
	},

	importContacts: {
		get: function () {
			return $('li.el-submenu.is-opened > ul > li:nth-child(4)');
		}
	},

	selImportContacts: {
		value: function () {
			browser.waitForExist('li.el-submenu.is-opened > ul > li:nth-child(4)', 10000);
		}
	},

	contactGrp: {
		get: function () {
			return $( 'li.el-submenu.is-opened > ul > li:nth-child(5)' );
		}
	},

	selContactGrp: {
		value: function () {
			browser.waitForExist('li.el-submenu.is-opened > ul > li:nth-child(5)', 10000);
			this.contactGrp.click();
		}
	},

	getErrorMsg: {
		value: function ( bol ) {
			browser.waitForExist( '.el-message__group', 20000, bol )
		}
	},

} );

module.exports = leftPanelNav;
