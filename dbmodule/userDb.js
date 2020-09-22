const {Users} = require("../models/userSchema")

const userFind = (values,callback) => {
    Users.findOne({userId:values})
    .then(user => {
        if(user){
            callback(user)
        }else{
            callback(false)
        }
    })
    .catch(err => {
        console.log(`error in finding the user ${values.id} ${err}`)
    })
}

const userCreate = (values,callback) => {
    Users.findOne({"userId":values.userId})
    .then(user => {
        if(user){
            callback(false)
        }
        else{
            const newUser = new Users(values)
            console.log(newUser)
            newUser.save()
            .then(saveUser => {
                console.log(saveUser)
                if(saveUser){
                    callback(true)
                }else{
                    callback(false)
                }
            })
        }

    })
    .catch(err => {
        console.log(`${err}`)
    })
}

module.exports = {userFind,userCreate}