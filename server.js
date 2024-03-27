const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello world')
})

app.get('/will', function (req, res) {
  res.send('Hello world')
})

app.get('/ready', function (req, res) {
  res.send('Great, it works')
})

app.listen(process.env.PORT || 3000)
module.exports = app