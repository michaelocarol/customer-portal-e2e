'use strict';

var page = require('./page.js');

var contactGrpModal = Object.create(page, {

	modalCreateGrpHeader: {
		get: function () {
			return $('.el-dialog.el-dialog--tiny .el-dialog__header .el-dialog__title');
		}
	},

	modalGrpName: {
		get: function () {
			return $('.el-dialog__body .el-input__inner');
		}
	},

	modalGrpDesc: {
		get: function () {
			return $('.el-dialog__body .el-textarea__inner');
		}
	},

	modalGrpSaveBtn: {
		get: function () {
			return $('.el-dialog__footer .el-button.el-button--primary');
		}
	},

	modalGrpCancelBtn: {
		get: function () {
			return $('.el-dialog__footer .el-button.el-button--text');
		}
	}

});

module.exports = contactGrpModal;
