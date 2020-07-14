var express = require('express')
var router = express.Router()
const mysql = require('./../db')
const sql = require('./../db/sql')
const stateCode = require('./../config/stateCode')

/* GET home page. */
router.get('/', function (req, res, next) {
    let params = req.query      // get 传值
    let msg = {
        errorCode: 200,
        errorMsg: 'success'
    }
    // res.send( JSON.stringify(msg) )
    res.json(msg)
});
/*
* 用户登录接口
* params userName
* params password
*  */

router.post('/login', async (req, res, next) => {
    let params = req.body
    let info = await mysql.query(sql.login, [params.userName])
    if (info.data.length == 0) {
        res.json({
            data: '无用户信息！',
            code: info.errorCode
        })
    } else {
        if (info.data[0].password == params.password) {
            res.json({
                data: info.data[0],
                code: info.errorCode
            })
        } else {
            res.json({
                data: '用户名或密码错误',
                code: info.errorCode
            })
        }
    }
})

module.exports = router;
