const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000;
const myerrorlogger = require("./errorLogger")

require("dotenv").config();
app.use(express.json())


mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
},function(err) {
  if (err) {
    console.error('System could not connect to mongo server.')
    console.log(err)     
  } else {
    console.log('System connected to mongo server.')
  }
})


app.use("/",require("./routes/index"))
app.use(myerrorlogger)

  app.listen(PORT,() => {
    console.log(`server is running at ${PORT}`)
  })

  module.exports = app;