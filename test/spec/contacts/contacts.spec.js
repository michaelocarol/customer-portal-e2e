'use strict';

var common = require( '../../pageobjects/common.page.js' );
var loginPage = require( '../../pageobjects/login.page.js' );
var contactJson = require('./contacts.json');
var contactsPage = require('../../pageobjects/contacts.page.js');
var leftPanelNav = require( '../../pageobjects/left-panel-nav.page.js' );

var contactIndex =  Math.floor( Math.random() * contactJson.contacts.length);

describe( 'E2E Test - Login > Contact Groups > Contacts > Web Sender > Campaigns', function () {

	it( 'should test login page in negtive and positive scenario', function () {
		loginPage.open();
		loginPage.enterUserNamePass('michael.ocarol@wavecell.com','password01$');
		loginPage.loginBtn.click();
		common.waitPageHeader();
	} );

	it('should navigate to contacts page', function() {
		leftPanelNav.expandCampaignMgr();
		leftPanelNav.selContacts();
		common.waitPageHeader();
		common.validatePageHeader('Contacts');
		common.waitForContGrpBtn();
	});

	it('should create contact', function() {		
		common.selCreateContactGrpBtn();
		common.waitPageHeader();
		common.validatePageHeader('Create Contact');
		contactsPage.contactMobile.setValue(contactJson.contacts[contactIndex].mobileNum);
		contactsPage.contactfName.setValue(contactJson.contacts[contactIndex].fName);
		contactsPage.contactlName.setValue(contactJson.contacts[contactIndex].lName);
		contactsPage.saveContactBtn.click();
		common.waitErrorMsg( true );
		common.logoutBtn();
	});

	describe('Verify the created contact group and contact that was assigned to a contact groups', function() {
		it( 'should test login page to verify the core scenarios', function () {
			loginPage.enterUserNamePass('michael.ocarol@wavecell.com','password01$');
			loginPage.loginBtn.click();
			common.waitPageHeader();
			common.validatePageHeader( 'Dashboard' );
		} );

		it('should verify the newly created contact with assigned contact group', function() {
			leftPanelNav.expandCampaignMgr();
			leftPanelNav.selContacts();
			common.waitPageHeader();
			common.waitForContGrpBtn();
			common.searchContactGrp(contactJson.contacts[contactIndex].mobileNum);
			expect(common.contactGrpName.getText()).to.contain(contactJson.contacts[contactIndex].mobileNum);
			// common.logoutBtn();
		});
	});
} );
