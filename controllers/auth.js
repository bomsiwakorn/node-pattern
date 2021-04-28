const { UsersService } = require('../services/Users.service')
const usersService = new UsersService()

const register = (req,res) => {
    const {username, password} = req.body
    try {  //ส่วนที่ resolve จากserviceจะมาเข้าในtry
        const insertUser = usersService.insertUser(username,password)
        return res.status(200).send({
            message: 'Register success.'
        })
    } catch (error) {  //ส่วนที่ reject จากserviceจะมาเข้าในcatch
        return res.status(500).send({
            message: 'Sorry, something went wrong.'
        })
    }
}



module.exports = {
    register
}