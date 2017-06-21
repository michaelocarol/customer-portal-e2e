'use strict';

var common = require( '../../pageobjects/common.page.js' );
var loginPage = require( '../../pageobjects/login.page.js' );
var contactJson = require('./contacts.json');
var editContactJson = require('./edit-contacts.json');
var contactsPage = require('../../pageobjects/contacts.page.js');
var leftPanelNav = require( '../../pageobjects/left-panel-nav.page.js' );

var contactIndex =  Math.floor( Math.random() * contactJson.contacts.length);

describe( 'End-To-End test for Contacts', function () {

	it( 'should test login page in negtive and positive scenario', function () {
		loginPage.open();
		loginPage.enterUserNamePass('michael.ocarol@wavecell.com','password01$');
		loginPage.selectLoginBtn();
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
			loginPage.selectLoginBtn();
			common.waitPageHeader();
			common.validatePageHeader( 'Dashboard' );
		} );

		it('should search the newly created contact', function() {
			leftPanelNav.expandCampaignMgr();
			leftPanelNav.selContacts();
			common.waitPageHeader();
			common.waitForContGrpBtn();
			common.searchContactGrp(contactJson.contacts[contactIndex].mobileNum);
			expect(common.contactGrpName.getText()).to.contain(contactJson.contacts[contactIndex].mobileNum);
			common.editContactGrp.click();
			common.waitPageHeader();
			common.validatePageHeader('Edit Contact');
		});

		it('should verify the newly created contact', function() {
			expect(contactsPage.contactfName.getAttribute('value')).to.contain(contactJson.contacts[contactIndex].fName);
			expect(contactsPage.contactlName.getAttribute('value')).to.contain(contactJson.contacts[contactIndex].lName);
			common.logoutBtn();
		});
	});

	describe('Edit Contact End-To-End Scenario', function() {
		it('should login to customer portal', function() {
			loginPage.enterUserNamePass('michael.ocarol@wavecell.com','password01$');
			loginPage.selectLoginBtn();
		});

		it('should navigate to contacts page', function() {
			leftPanelNav.expandCampaignMgr();
			leftPanelNav.selContacts();
			common.waitForContGrpBtn();
		});

		it('should search newly created contact', function() {
			common.searchContactGrp(contactJson.contacts[contactIndex].mobileNum);
			common.editContactGrp.click();
			common.waitPageHeader();
			common.validatePageHeader('Edit Contact');
		});

		it('should search the newly created contact', function() {
			contactsPage.contactfName.clearElement();
			contactsPage.contactfName.clearElement();
			contactsPage.contactfName.setValue(editContactJson.contacts[contactIndex].fName);
			contactsPage.contactlName.setValue(editContactJson.contacts[contactIndex].lName);
			contactsPage.saveContactBtn.click();
			common.waitErrorMsg( true );
			common.logoutBtn();
		});
	});

	describe('Verify Edited Contacts', function() {
		it('should login to customer portal', function() {
			loginPage.enterUserNamePass('michael.ocarol@wavecell.com','password01$');
			loginPage.selectLoginBtn();
		});

		it('should navigate to contacts page', function() {
			leftPanelNav.expandCampaignMgr();
			leftPanelNav.selContacts();
			common.waitForContGrpBtn();
		});

		it('should search the newly edit contact', function() {
			common.searchContactGrp(editContactJson.contacts[contactIndex].mobileNum);
			expect(common.contactGrpName.getText()).to.contain(editContactJson.contacts[contactIndex].mobileNum);
			common.editContactGrp.click();
			common.waitPageHeader();
			common.validatePageHeader('Edit Contact');
		});

		it('should verify the newly created contact', function() {
			expect(contactsPage.contactfName.getAttribute('value')).to.contain(editContactJson.contacts[contactIndex].fName);
			expect(contactsPage.contactlName.getAttribute('value')).to.contain(editContactJson.contacts[contactIndex].lName);
			common.logoutBtn();
		});		
	});

	describe('Delete Contacts End-To-End Scenario', function() {
		it( 'should test login page to delete contact and contact groups', function () {
			loginPage.enterUserNamePass('michael.ocarol@wavecell.com','password01$');
			loginPage.selectLoginBtn();
		} );

		it('should navigate to contacts page', function() {
			leftPanelNav.expandCampaignMgr();
			leftPanelNav.selContacts();
			common.waitForContGrpBtn();
		});

		it('should verify delete contact message modal and cancel deletion of contact', function() {
			common.searchContactGrp(editContactJson.contacts[contactIndex].mobileNum);
			expect(common.contactGrpName.getText()).to.contain(editContactJson.contacts[contactIndex].mobileNum);
			common.waitdelContactGrp();
			common.delContactGrp.click();
			expect(common.confirmModalMsg.getText('p')).to.contain('This will permanently delete contact: ' + editContactJson.contacts[contactIndex].mobileNum + '. Continue?');
			common.confirmModalCancelBtn.click();
		});

		it('should delete the newly created contact', function() {
			common.searchContactGrp(editContactJson.contacts[contactIndex].mobileNum);
			expect(common.contactGrpName.getText()).to.contain(editContactJson.contacts[contactIndex].mobileNum);
			common.waitdelContactGrp();
			common.delContactGrp.click();
			expect(common.confirmModalMsg.getText('p')).to.contain('This will permanently delete contact: ' + editContactJson.contacts[contactIndex].mobileNum + '. Continue?');
			common.confirmModalDelBtn();
			common.waitErrorMsg(true);
			common.logoutBtn();
		});		
	});

	describe('Verify Deleted Contacts', function() {
		it('should login to customer portal', function() {
			loginPage.enterUserNamePass('michael.ocarol@wavecell.com','password01$');
			loginPage.selectLoginBtn();
		});

		it('should navigate to contacts page', function() {
			leftPanelNav.expandCampaignMgr();
			leftPanelNav.selContacts();
			common.waitForContGrpBtn();
		});

		it('should verify deleted contact', function() {
			common.searchContactGrp(editContactJson.contacts[contactIndex].mobileNum);
			common.waitemptyGrpLstMsg();
			expect(common.emptyGrpLstMsg.getText()).to.contain(editContactJson.emptyListMsg);
			common.logoutBtn();
		});
	});
} );
