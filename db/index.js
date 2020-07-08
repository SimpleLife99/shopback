const mysql = require('mysql')
const config = require('./../config')
const stateCode = require('./../config/stateCode')

class DB {
    constructor() {
        this.db = mysql.createConnection(config)
        this.db.connect((err) => {
            console.log(err)
            if (err) console.log('数据库连接失败')
            console.log('数据库连接成功')
        })
    }

    query(sql, par = []) {
        return new Promise((resolve, reject) => {
            this.db.query(sql, par, (error, results) => {
                if (error) {
                    console.log('error',error)
                    reject(error)
                    return
                }

                results.length == 0 ? resolve({
                    data: results,
                    errorCode: stateCode.noContent
                }) : resolve({
                    data: results,
                    errorCode: stateCode.success
                })
            })
        })
    }
}

module.exports = new DB()
