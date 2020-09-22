const mongoose = require("mongoose")

const userScheama = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Users = mongoose.model("Users", userScheama)
module.exports = {
    Users
}