var express = require('express')
var bodyParser = require('body-parser')
var cubeRoutes = require('./routes/cube-routes.js')

var app = express()

app.use(bodyParser.json())
app.use('/cube', cubeRoutes)

app.listen(8000, function() {
  console.log('App listening on port 8000!')
})
module.exports = app
