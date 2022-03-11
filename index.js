const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

app.post('/', function (req, res) {
  res.send({message:'Hello World'})
})

app.listen(3001)