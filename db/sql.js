const sql ={
    login:'SELECT * FROM users WHERE user_name = ? AND `password` = ?'
}
module.exports = sql