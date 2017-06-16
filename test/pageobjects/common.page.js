'use strict';

var page = require('./page');

var contactGrps = Object.create( page, {

	//COMMON PAGE OBJECTS HEADER AND CONTACT LIST
	pageHeader: {
		get: function () {
			return $( '.m0' );
		}
	},

	createContactGrpBtn: {
		get: function () {
			return $( '.el-panel .el-row.mb2.flex.justify-end .flex.justify-between .el-button' );
		}
	},

	waitForContGrpBtn: {
		value: function () {
			browser.waitForVisible('.el-panel .el-row.mb2.flex.justify-end .flex.justify-between .el-button', 10000);
			browser.waitForEnabled('.el-panel .el-row.mb2.flex.justify-end .flex.justify-between .el-button', 10000);
		}
	},

	selCreateContactGrpBtn: {
		value: function () {
			this.createContactGrpBtn.click();
		}
	},

	searchContactGrp: {
		value: function (text) {
			browser.waitForVisible('.el-row.mb2.flex.justify-end .el-input__inner',10000);
			browser.setValue('.el-row.mb2.flex.justify-end .el-input__inner', text);
		}
	},

	waitPageHeader: {
		value: function () {
			browser.waitForVisible( '.content-wrapper .p2 .m0', 10000 );
		}
	},

	validatePageHeader: {
		value: function ( header ) {
			expect( this.pageHeader.getText() ).to.contain( header );
		}
	},

	// SMS/CONTACTS/CONTACTS GROUP LIST GRID PAGE OBJECTS
	contactGrpName: {
		get: function () {
			return $('.el-table .el-table__body-wrapper td:nth-child(2)');
		}
	},

	contactGrpDesc: {
		get: function () {
			return $('.el-table .el-table__body-wrapper td:nth-child(3)');
		}
	},

	contactGrpTotNum: {
		get: function () {
			return $('.el-table .el-table__body-wrapper td:nth-child(4) > div > span');
		}
	},

	editContactGrp: {
		get: function () {
			return $('.el-table .el-table__body-wrapper td:nth-child(5) .el-icon-wc-note');
		}
	},

	delContactGrp: {
		get: function () {
			return $('.el-table .el-table__body-wrapper td:nth-child(5) .el-icon-wc-trash');
		}
	},

	waitdelContactGrp: {
		value: function () {
			browser.waitForEnabled('.el-table .el-table__body-wrapper td:nth-child(5) .el-icon-wc-trash', 10000);
		}
	},

	emptyGrpLstMsg: {
		get: function () {
			return $('.el-table__body-wrapper .el-table__empty-block .el-table__empty-text');
		}
	},

	waitemptyGrpLstMsg: {
		value: function() {
			browser.waitForVisible('.el-table__body-wrapper .el-table__empty-block .el-table__empty-text', 10000);
		}
	},


	//CONFIRMATION CONTACT GROUP MODAL
	confirmModalHeader: {
		get: function () {
			return $('.el-message-box .el-message-box__title');
		}
	},

	confirmModalMsg: {
		get: function () {
			return $('.el-message-box .el-message-box__message');
		}
	},

	confirmModalDelBtn: {
		value: function () {
			browser.waitForVisible('.el-message-box .el-button--danger', 10000);
			browser.click('.el-message-box .el-button--danger');
			browser.waitForExist('.el-message-box .el-button--danger', 10000, false);
		}
	},

	confirmModalCancelBtn: {
		get: function () {
			return $('.el-message-box .el-button--text');
		}
	},

	// COMMON MESSAGES FOR PAGES WHEN SAVING VALID OR INVALID DATA
	errorMsg: {
		get: function () {
			return $( '.el-message__group' );
		}
	},

	closeErrorMsg: {
		get: function () {
			return $( '.el-message__closeBtn.el-icon-close' );
		}
	},

	waitErrorMsg: {
		value: function ( bol ) {
			//False to check if element is exist
			//True to check if element no longer exist
			browser.waitForVisible( '.el-message__group p', 10000 );
			browser.waitForExist( '.el-message__group', 20000, bol );
		}
	},

	logoutBtn: {
		value: function () {
			browser.isEnabled('.el-dropdown .el-button');
			$( '.el-dropdown .el-button' ).click();
			browser.waitForVisible('.el-dropdown-menu__item--divided', 10000);
			browser.isEnabled('.el-dropdown-menu__item--divided');
			$( '.el-dropdown-menu__item--divided' ).click();
			browser.waitForVisible( '.el-col .el-button', 10000 );

		}
	},

	reloadPage: {
		value: function () {
			browser.reload();			
			browser.windowHandleSize( {
				width: 1680,
				height: 1050
			} );
		}
	},

} ); 

module.exports = contactGrps;
