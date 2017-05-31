'use strict';

var page = require('./page');

var formPage = Object.create(page, {

    username: { 
        get: function () { 
            return $('.el-col [type="text"]'); 
        } 
    },
    
    password: { 
        get: function () {
            return $('.el-col [type="password"]');
        }
    },
    loginBtn: {
        get: function () {
            return $('.el-col .el-button');
        }
    },
    
    pageHeader: { 
        get: function () { 
            return $('.m0'); 
        } 
    },


    open: { value: function() {
        page.open.call(this, 'login');
    } },
});

module.exports = formPage;
