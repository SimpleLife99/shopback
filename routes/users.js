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
/*
* 用户登录接口
* params userName
* params password
*  */
router.post('/login', async (req, res, next) => {
    let params = req.body
    let info = await mysql.query(sql.login, [params.userName])
    if (info.data.length == 0){
        res.json({
            data: '无用户信息！',
            errorCode: info.errorCode
        })
    }else{
        if (info.data[0].password == params.password){
            res.json({
                data: info.data[0],
                errorCode: info.errorCode
            })
        }else{
            res.json({
                data: '用户名或密码错误',
                errorCode: info.errorCode
            })
        }
    }
})

module.exports = router;
