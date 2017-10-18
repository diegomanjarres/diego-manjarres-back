var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(8000, function() {
  console.log('app listening on port 8000!')
})
