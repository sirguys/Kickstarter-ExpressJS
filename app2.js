var express = require('express')
var app = express()
app.listen(2000)

app.get('/convert', convert)

function convert(req, res) {
  var f = req.query.area * 10.7639
  res.send("result = " + f + " square feet") //ต้องใส่ตัวหนังสือเข้าไปเพื่อส่งไปเป็น object
}

app.get('/start', showStart)
function showStart(req, res){
  res.send(
    "<form action='/convert'>" +
      "<input name='area'>" +
      "<button type='submit'>OK</button>" +
      "</form>"
  )
}

var data = []
data['bangrak'] = '185000'
data.dusit = '183000'

app.get('/zip', showZip)

function showZip(req, res) {
  // req.query.city
  var result = data[req.query.city] //ส่ง city เข้ามา
  if(result == null) {
    result = 'not found'
  }
  res.send(result)
}
