const express = require('express')
const app = express()
require("dotenv").config();
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require("express-jwt")
const path = require("path")

const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))
app.use('/api', expressJwt({secret: secret}))

app.use('/auth', require('./routes/auth'))
app.use('/api/entry', require('./routes/entry'))


mongoose.connect(process.env.MONGODB_URI ||
  'mongodb://localhost:27017/speech-journal', 
  {useNewUrlParser: true},
  () => console.log(`Connected to the DB!`)
)

app.use((err, req, res, next) => {
  if(err.name === "UnauthorizedError"){
      res.status(err.status)
  }
  return res.send({errMsg: err.message}) 
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))