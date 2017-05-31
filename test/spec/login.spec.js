'use strict';

var formPage = require('../pageobjects/login.page');

describe('Login Test Scenarios', function () {
    
    it('should test login page in negtive and positive scenario', function () {
        formPage.open();
        formPage.username.setValue('test06@wavecell.com');
        formPage.password.setValue('password01$');        
        formPage.loginBtn.click();
        browser.waitForVisible( '.m0', 5000 );
        expect( formPage.pageHeader.getText() ).to.contain( 'Dashboard' );
    });

});
