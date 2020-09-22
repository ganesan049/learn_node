const fs = require("fs")

const errorLogger = (err,req,res,next) => {
    console.log('from error logger')
    fs.appendFile("ErrorLogger.txt",err.stack,(error) => {
        if(error){
            console.log(error)
        }
    })
    if(!err.status){
        err.status = 500;
    }
    console.log(err.message)
    return res.json({"message":err.message})
}

module.exports = errorLogger;
