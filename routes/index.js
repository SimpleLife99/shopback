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

module.exports = router;
