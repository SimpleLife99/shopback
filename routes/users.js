var express = require('express')
var router = express.Router()
const mysql = require('./../db')
const sql = require('./../db/sql')
const stateCode = require('./../config/stateCode')

/*
* 生成token验证码
*  */
router.post('/authcode', function (req, res, next) {
    let code = Math.random().toString(36).substr(2)
    res.json({
        data: code,
        errorCode: stateCode.success
    })
});

module.exports = router;
