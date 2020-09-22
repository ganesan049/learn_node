const userDb = require("../dbmodule/userDb")
const validator = require("../extras/validator")

const createUser = (values,next,callback) => {
    if(validator.validateName(values.title)){
        const userObject = {userId:values.userId,
        id:values.id,
        title:values.title,
        body:values.body
        }
        console.log("\n "+userObject.userId+"\n")
        userDb.userCreate(userObject,(value) => {
            if(value){
                callback(true)
            }
            const err = new Error("user is already present");
            err.status = 500;
            next(err)
        })
    }
}

const findUser = (values,next,callback) => {
    console.log(callback)
        userDb.userFind(values,(value) => {
            if(value){
                callback(value)
            }
            const err = new Error("user is not present");
            err.status = 500;
            next(err)
        })
}

module.exports = {createUser, findUser}