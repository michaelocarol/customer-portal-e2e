'use strict';

var common = require('../../pageobjects/common.page.js');
var loginPage = require( '../../pageobjects/login.page' );

describe( 'Login Test Scenarios', function () {

	it( 'should validate empty user name and password', function () {
		loginPage.open();
		loginPage.loginBtn.click();
		browser.waitForVisible( '.el-form .el-form-item__error', 10000 );
		expect( loginPage.invalidUserName.getText() ).to.contain( 'Please enter a valid email address' );
		browser.waitForVisible( '.el-form .el-form-item__error', 10000 );
		expect( loginPage.emptyPassword.getText() ).to.contain( 'Password is required' );
	} );

	it( 'should verify invalid user name', function () {
		loginPage.enterUserNamePass('aaaaaaa','password01$')
		loginPage.loginBtn.click();
		browser.waitForVisible( '.el-form .el-form-item__error', 10000 );
		expect( loginPage.invalidUserName.getText() ).to.contain( 'Please enter a valid email address' );
	} );

	it( 'should test verify invalid password', function () {
		loginPage.enterUserNamePass('test06@wavecell.com','aaaaaaa')
		loginPage.loginBtn.click();
		browser.waitForVisible( 'p', 10000 );
		expect( common.errorMsg.getText( 'p' ) ).to.contain( 'Incorrect password!' );
		common.waitErrorMsg(true);
	} );

	it( 'Cross-site script should NOT work in login page', function () {
        loginPage.enterUserNamePass('<body onload=alert(\'test1\')>','<body onload=alert(\'test1\')>$')
        loginPage.loginBtn.click();
        expect( loginPage.invalidUserName.getText() ).to.contain( 'Please enter a valid email address' );
	} );

    it( 'should test login page in negtive and positive scenario', function () {        
        loginPage.enterUserNamePass('test06@wavecell.com','password01$');
        loginPage.loginBtn.click();
        browser.waitForVisible( '.m0', 10000 );
        expect( common.pageHeader.getText() ).to.contain( 'Dashboard' );
        common.logoutBtn();
    } );

} );
