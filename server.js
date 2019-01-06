const express = require('express')
const app = express()
require("dotenv").config();
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require("express-jwt")
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(morgan('dev'))

app.use('/api', expressJwt({secret: process.env.SECRET}))

app.use('/auth', require('./routes/auth'))
app.use('/api/entry', require('./routes/entry'))


mongoose.connect(
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

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))