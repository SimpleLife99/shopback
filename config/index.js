const env = process.env.NODE_ENV       // 环境参数
// SET NODE_ENV=development
let mysql_conf
if (env === 'development') {
//    测试环境
    mysql_conf = {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'shopadmin',
    }
}
if (env === 'production') {
    //生产环境
    mysql_conf = {
        host: 'localhost',
        user: 'root',
        port:'3306',
        password: 'root',
        database: 'shopadmin'
    }
}
module.exports = mysql_conf
