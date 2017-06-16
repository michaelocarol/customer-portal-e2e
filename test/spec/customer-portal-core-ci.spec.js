'use strict';

var common = require( '../pageobjects/common.page.js' );
var loginPage = require( '../pageobjects/login.page.js' );
var contactsPage = require('../pageobjects/contacts.page.js');
var leftPanelNav = require( '../pageobjects/left-panel-nav.page.js' );
var webSenderPage = require('../pageobjects/web-sender.page.js');
var contactGrpJson = require('./sms-camp-core-scenario.json');
var contactGrpModal = require('../pageobjects/contact-groups-modal.page.js');

var dateStamp = new Date();
var newCampName = contactGrpJson.campaign.campaignName + dateStamp.toUTCString().slice( 0, -4 );
var subAcctIndex =  Math.floor( Math.random() * contactGrpJson.subAccount.length);

describe( 'E2E Test - Login > Contact Groups > Contacts > Web Sender > Campaigns', function () {

	it( 'should test login page in negtive and positive scenario', function () {
		loginPage.open();
		loginPage.enterUserNamePass('michael.ocarol@wavecell.com','password01$');
		loginPage.loginBtn.click();
		common.waitPageHeader();
	} );

	it( 'should navigate to contact groups page', function() {
		leftPanelNav.expandCampaignMgr();
		leftPanelNav.selContactGrp();
		common.waitPageHeader();
	} );

	it('should create new contact groups', function() {
		common.waitForContGrpBtn();
		common.selCreateContactGrpBtn();
		browser.waitForVisible( '.el-dialog.el-dialog--tiny .el-dialog__header .el-dialog__title', 10000 );
		contactGrpModal.modalGrpName.setValue(contactGrpJson.groups.groupName);
		contactGrpModal.modalGrpDesc.setValue(contactGrpJson.groups.groupDesc);
		contactGrpModal.modalGrpSaveBtn.click();
		common.waitErrorMsg( true );
	} );

	it('should navigate to contacts page', function() {		
		leftPanelNav.selContacts();
		common.waitPageHeader();
		common.waitForContGrpBtn();
	});

	it('should create contact and assigned it to a group', function() {		
		common.selCreateContactGrpBtn();
		common.waitPageHeader();
		contactsPage.contactMobile.setValue(contactGrpJson.contacts.mobileNum);
		contactsPage.openContactGrpDrpDwn.click();
		browser.waitForVisible('.el-select-dropdown__wrap .el-select-dropdown__item:nth-child(1)', 10000);
		contactsPage.enterContactGrpName.setValue(contactGrpJson.groups.groupName);
		contactsPage.selectContactGrpName.click();
		contactsPage.closeContactGrpDrpDwn.click();
		browser.waitForExist( '.el-select-dropdown__wrap .el-select-dropdown__item:nth-child(1)', 20000, false );
		contactsPage.contactfName.setValue(contactGrpJson.contacts.fName);
		contactsPage.contactlName.setValue(contactGrpJson.contacts.lName);
		contactsPage.saveContactBtn.click();
		common.waitErrorMsg( true );
		common.logoutBtn();
	});

	describe('Verify the created contact group and contact that was assigned to a contact groups', function() {
		
		it( 'should test login page to verify the core scenarios', function () {
			browser.waitForVisible( '.el-col [type="text"]', 10000 );
			loginPage.enterUserNamePass('michael.ocarol@wavecell.com','password01$');
			loginPage.loginBtn.click();
			common.waitPageHeader();
		} );

		it('should verify the newly created contact with assigned contact group', function() {
			leftPanelNav.expandCampaignMgr();
			leftPanelNav.selContacts();
			common.waitPageHeader();
			common.waitForContGrpBtn();
			common.searchContactGrp(contactGrpJson.contacts.mobileNum);
		});

		it('should verify the newly created group and its total number of assigned contact', function(done) {
			leftPanelNav.selContactGrp();
			common.waitPageHeader();
			common.waitForContGrpBtn();
			common.searchContactGrp(contactGrpJson.groups.groupName);
		});
	});

	describe('Send an sms using the newly created contact groups and contacts', function() {
		it('should navigate to web sender', function() {
			leftPanelNav.selWebSender();
			common.waitPageHeader();
			webSenderPage.smsCampSelGrpRadioBtn.click();
			webSenderPage.smsCampOpenGrp.click();
			webSenderPage.smsCampSearchGrp.setValue(contactGrpJson.groups.groupName);
			webSenderPage.smsCampSelectGrp.click();
		});

		it('should enter origin and messages', function() {
			webSenderPage.smsCampFrom.setValue(contactGrpJson.originAndMsg.smsSender);
			webSenderPage.smsCampMsg.setValue(contactGrpJson.originAndMsg.smsMsg);
		});

		it('should select sub-account', function() {
			webSenderPage.smsCampSendImm.click();
			webSenderPage.smsCampOpenSubAcct.click();
			browser.waitForVisible('[class="el-select-dropdown"] [class="el-scrollbar"] li[data-v-317adb49]', 10000);
			$('[class="el-select-dropdown"] [class="el-scrollbar"]').$$('li').click();
		});

		it('should process the sms campaign and create sms campaign name', function() {
			webSenderPage.smsCampProcCampBtn.isEnabled();
			webSenderPage.smsCampProcCampBtn.click();
			webSenderPage.smsCampModalEnterCampName(newCampName);
			webSenderPage.smsCampModalSendMsgBtn.click();
			common.waitErrorMsg( true );
			common.waitPageHeader();		
		});

		it('should search the newly sent sms campaing', function() {			
			common.searchContactGrp(newCampName);
			common.logoutBtn();
		});
	});

	describe('Delete newly created contact and cotact groups', function() {
		it( 'should test login page to delete contact and contact groups', function () {
			common.reloadPage();
			loginPage.open();
			loginPage.enterUserNamePass('michael.ocarol@wavecell.com','password01$');
			loginPage.loginBtn.click();
			common.waitPageHeader();
		} );

		it('should delete the newly created contact', function() {
			leftPanelNav.expandCampaignMgr();
			leftPanelNav.selContacts();
			common.waitPageHeader();
			common.waitForContGrpBtn();
			common.searchContactGrp(contactGrpJson.contacts.mobileNum);
			common.waitdelContactGrp();
			common.delContactGrp.click();
			common.confirmModalDelBtn();
			common.waitErrorMsg(true);
		});

		it('should delete newly created group', function() {
			leftPanelNav.selContactGrp();
			common.waitPageHeader();
			common.waitForContGrpBtn();
			common.searchContactGrp(contactGrpJson.groups.groupName);
			common.waitdelContactGrp();
			common.delContactGrp.click();
			common.confirmModalDelBtn();
			common.waitErrorMsg(true);
			common.logoutBtn();
		});
	});

	describe('Verify the newly deleted contacts and contact groups', function() {
		it( 'should test login page to verify the deleted contacts and contact groups', function () {
			common.reloadPage();
			loginPage.open();
			loginPage.enterUserNamePass('michael.ocarol@wavecell.com','password01$');
			loginPage.loginBtn.click();
			common.waitPageHeader();
		} );

		it('should verify deleted contact', function() {
			leftPanelNav.expandCampaignMgr();
			leftPanelNav.contacts.click();
			common.waitPageHeader();
			common.waitForContGrpBtn();
			common.searchContactGrp(contactGrpJson.contacts.mobileNum);
			common.waitemptyGrpLstMsg();
		});

		it('should verify deleted contact', function() {
			leftPanelNav.contactGrp.click();
			common.waitPageHeader();
			common.waitForContGrpBtn();
			common.searchContactGrp(contactGrpJson.groups.groupName);
			common.waitemptyGrpLstMsg();
			common.logoutBtn();
		});
	});

} );
