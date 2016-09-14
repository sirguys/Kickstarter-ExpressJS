var express = require('express')
var app = express()
app.listen(2000)

app.get('/', home)

function home(req, res) {
  res.send('Welcome To ExpressJS')
}

var coffee = [
  {name: 'Latte', price: 90},
  {name: 'Mocha', price: 190},
  {name: 'Espresso', price: 290}
]

app.get('/data', sendData)

function sendData(req, res) {
  res.send(coffee)
}
