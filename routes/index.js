var express = require('express')
const mysql = require('./../db')
const sql = require('./../db/sql')
var router = express.Router();

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
    let info = await mysql.query(sql.login, [params.username])
    let data = {
        authorization: 'abcdefghijklmn',
        user_real_name: info.data[0].real_name,
        user_name: info.data[0].user_name
    }
    if (info.data.length == 0){
        res.json({
            data: '',
            msg:'用户名密码错误！',
            code: info.errorCode
        })
    }else{
        if (info.data[0].password == params.password){
            res.json({
                data: data,
                msg:'登录成功',
                code: info.errorCode
            })
        }else{
            res.json({
                data: '用户名或密码错误',
                msg:'登录成功',
                code: info.errorCode
            })
        }
    }
})

module.exports = router;
