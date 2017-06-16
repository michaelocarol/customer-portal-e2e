'use strict';

var page = require('./page.js');

var webSender = Object.create(page, {
	
	//DESTINATION SECTION PAGE OBJECTS
	smsCampOpenGrp: {
		get: function () {
			return $('.el-form-item__content .el-input__icon.el-icon-caret-top');
		}
	},

	smsCampSearchGrp: {
		get: function () {
			return $('.el-form-item__content .el-select__tags .el-select__input.is-undefined');
		}
	},

	smsCampSelContactRadioBtn: {
		get: function () {
			return $('.el-radio:nth-child(1) .el-radio__label');
		}
	},

	smsCampSelGrpRadioBtn: {
		get: function () {
			return $('.el-radio:nth-child(2) .el-radio__label');
		}
	},

	smsCampUploadContactRadioBtn: {
		get: function () {
			return $('.el-radio:nth-child(3) .el-radio__label');
		}
	},

	smsCampSelectGrp: {
		get: function () {
			return $('.el-select-dropdown.is-multiple .el-scrollbar .el-select-dropdown__wrap .el-scrollbar__view.el-select-dropdown__list');
		}
	},

	//ORIGIN AND MESSAGE SECTION PAGE OBJECTS
	smsCampFrom: {
		get: function () {
			return $('.step-group.active .el-form-item.test.is-required .el-input .el-input__inner');
		}
	},

	smsCampMsg: {
		get: function () {
			return $('.el-form-item__content .el-textarea .el-textarea__inner');
		}
	},

	smsCampInsertTemp: {
		get: function () {
			return $('.el-form-item__content .el-button.el-button--text');
		}
	},

	smsCampSaveTemp: {
		get: function () {
			return $('.el-checkbox__inner');
		}
	},

	smsCampSaveTempName: {
		get: function () {
			return $('.el-col.el-col-16 .el-input__inner');
		}
	},

	//SCHEDULE SECTION PAGE OBJECTS
	smsCampSendImm: {
		get: function () {
			return $('.el-form-item.mb1 .el-radio:nth-child(1)');
		}
	},

	smsCampSchedSms: {
		get: function () {
			return $('.el-form-item.mb1 .el-radio:nth-child(2)');
		}
	},

	smsCampOpenSubAcct: {
		get: function () {
			return $('.step-group.active:nth-child(4) .el-form-item .el-form-item__content .el-input__icon.el-icon-caret-top');
		}
	},

	smsCampCloseSubAcct: {
		get: function () {
			return $('.step-group.active:nth-child(4) .el-form-item .el-form-item__content .el-input__icon.el-icon-caret-top.is-reverse');
		}
	},

	smsCampSelSubAcct: {
		get: function () {
			return $('[class="el-select-dropdown"] [class="el-scrollbar"]').$$('li');
		}
	},

	smsCampVerifySelSubAcct: {
		get: function () {
			return $('.step-group.active:nth-child(4) .el-input__inner');
		}
	},

	//RESET & PROCESS CAMPAIGN PAGE OBJECTS
	smsCampResetBtn: {
		get: function () {
			return $('.right-align .el-button--text');
		}
	},

	smsCampProcCampBtn: {
		get: function () {
			return $('.right-align .el-button--primary');
		}
	},

	//WEB SENDER ENTER CAMPAIGN NAME MODAL
	smsCampModalEnterCampName: {
		value: function (campName) {
			browser.waitForVisible('.el-message-box__btns .el-button--text', 10000);
			browser.clearElement('.el-message-box .el-message-box__content .el-input__inner');
			browser.setValue('.el-message-box .el-message-box__content .el-input__inner',campName);
			// return $('.el-message-box .el-message-box__content .el-input__inner');
		}
	},

	smsCampModalCampName: {
		get: function () {
			return $('.el-message-box .el-message-box__content .el-input__inner');
		}
	},

	smsCampModalSendMsgBtn: {
		get: function () {
			return $('.el-message-box__btns .el-button--primary');
		}
	},

	smsCampModalCancelBtn: {
		get: function () {
			return $('.el-message-box__btns .el-button--text');
		}
	},

	smsSentNotification: {

	}
});

module.exports = webSender;
