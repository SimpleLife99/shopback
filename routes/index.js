var express = require('express');
const mysql = require('./../db')
const sql = require('./../db/sql')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let params = req.query      // get 传值
    console.log(params)
    let msg = {
        errorCode: 200,
        errorMsg: 'success'
    }
    // res.send( JSON.stringify(msg) )
    res.json(msg)
});

router.post('/login', async (req, res, next) => {
    // post 传值 Content-type = 'application/json'
    let params = req.body
    console.log(req.body)
    let info = await mysql.query(sql.login, [params.userName,params.password])
    res.json({
        data:info.data[0],
        errorCode: info.errorCode
    })
})

module.exports = router;
