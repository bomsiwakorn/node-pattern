const db = require('../connection/database')

class UsersService { //หลักการเขียนแบบ oop

    insertUsers(username,password) {
        return new Promise((resolve,reject) => {
            try {
                const sql = `insert into users (username,password) value (?,?)`
                const data = [username,password]
                const values = Object.values(data)
                db.query(sql,values, (error, result) => {
                    if (error) return reject({ 
                        status: false,
                        msg: error.sqlMessage,
                        code: '111'
                    })
                    return resolve()
                })
            } catch (error) {
                return reject({
                    status: false,
                    msg: error,
                    code: '222'
                })
            }
        })
    }
    
}
module.exports.UsersService = UsersService