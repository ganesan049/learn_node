const express = require("express")
const userService = require("../servcies/user")
const router = express.Router();

router.get("/user/:id",(req,res,next) => {
    let user = req.params.id;
    return userService.findUser(user,next,(value) => {
        if(value){
            res.json({"message":value})
        }
    })
})
router.post("/user",(req,res,next) => {
    console.log("\n in user router"+req.body)
    return userService.createUser(req.body,next,(value) => {
        if(value === true){
            res.json({"message":"user created successfully"})
        }
    })
})

router.all("*",(req,res) => {
    res.json({"message":"Route is not found"})
})

module.exports = router;