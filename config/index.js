let mysql_conf
if (process.env.NODE_ENV === 'development') {
//    测试环境
    mysql_conf = {
        host: 'localhost',
        user: 'root',
        port: '3308',
        password: 'root',
        database: 'shopadmin',
    }
} else if (process.env.NODE_ENV === 'production') {
    //生产环境
    mysql_conf = {
        host: 'localhost',
        user: 'root',
        port: '3308',
        password: 'root',
        database: 'shopadmin'
    }
} else {
    mysql_conf = {
        host: 'localhost',
        user: 'root',
        port: '3308',
        password: 'root',
        database: 'shopadmin',
    }
}
module.exports = mysql_conf
