const mysql = require('mysql')
const config = require('./../config')

const stateCode = {
    success: '200',
    noContent: '204',
    error: '400',
    notFind: '404',
    serverError: '500'
}

class DB {
    constructor() {
        this.db = mysql.createConnection(config)
        this.db.connect((err) => {
            if (err) console.log('数据库连接失败')
            console.log('数据库连接成功')
        })
    }

    query(sql, par = []) {
        return new Promise((resolve, reject) => {
            this.db.query(sql, par, (error, results) => {
                if (error) {
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