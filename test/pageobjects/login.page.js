'use strict';

var page = require('./page');

var loginPage = Object.create(page, {

	username: {
		get: function () {
			return $( '.el-col [type="text"]' );
		}
	},

	password: {
		get: function () {
			return $( '.el-col [type="password"]' );
		}
	},

	loginBtn: {
		get: function () {
			return $( '.el-col .el-button' );
		}
	},

	invalidUserName: {
		get: function () {
			return $( '.el-form .el-form-item:nth-child(1) .el-form-item__error' );
		}
	},

	emptyPassword: {
		get: function () {
			return $( '.el-form .el-form-item:nth-child(2) .el-form-item__error' );
		}
	},

	enterUserNamePass: {
		value: function ( user, pass ) {
			browser.waitForEnabled( '.el-col .el-button', 10000 );
			this.username.setValue(user);
			this.password.setValue(pass);
		}
	},

	open: {
		value: function() {
			page.open.call(this, '/');
		}
	},
});

module.exports = loginPage;
