'use strict';

var page = require('./page.js');

var contacts = Object.create(page, {

	contactMobile: {
		get: function () {
			return $('.el-panel .el-form-item:nth-child(1) .el-input__inner');
		}
	},

	enterContactGrpName : {
		get: function () {
			return $('.el-panel .el-form-item:nth-child(2) .el-select__input');
		}
	},

	selectContactGrpName: {
		get: function () {
			// return $('.el-select-dropdown__wrap .el-select-dropdown__item:nth-child(1)');
			return $('.el-select-dropdown.is-multiple .el-scrollbar .el-select-dropdown__wrap .el-scrollbar__view.el-select-dropdown__list');
		}
	},

	openContactGrpDrpDwn: {
		get: function () {
			return $('.el-panel .el-form-item:nth-child(2) .el-input__icon.el-icon-caret-top');
		}
	},

	closeContactGrpDrpDwn: {
		get: function () {
			return $('.el-panel .el-form-item:nth-child(2) .el-form-item__content');
		}
	},

	contactfName: {
		get: function () {
			return $('.el-panel .el-form-item:nth-child(3) .el-input__inner');
		}
	},

	contactlName: {
		get: function () {
			return $('.el-panel .el-form-item:nth-child(4) .el-input__inner');
		}
	},

	saveContactBtn: {
		get: function () {
			return $('.el-panel .el-button');
		}
	},

	createContactBackToLst: {
		get: function () {
			return $('.el-panel .el-button--text');
		}
	},

	createContacGrpArrowDwn: {
		get: function () {
			return $('.is-reverse');
		}
	},

	removeContactGrp: {
		get: function () {
			//COMPARE THE TEXT AND GET THE INDEX TO REMOVE THE CONTACT GROUP
			return $('.el-select__tags .el-tag.el-tag--primary:nth-child');
		}
	},

});

module.exports = contacts;
