var _ = require('underscore')
var Cube = require('./cube-business-object.js')

function processData(input) {
  var cube
  var lines = input.split('\n')
  var T = lines.splice(0, 1)
  var result = lines.map(l => {
    var isNewTestCase = l.match(/^(\d) (\d)$/)
    if (isNewTestCase)
      cube = new Cube(+isNewTestCase[1])
    else return executeOperation(cube, l)
  })
  return result
    .filter(n => (n != null))
    .reduce((memo, act) => (memo + act + '\n'), '')
}

function executeOperation(cube, line) {
  //console.log(cube);
  var operation = line.split(' ')
  var type = operation.splice(0, 1)[0]
  var args = operation
  if (type === 'UPDATE') {
    cube.update(+args[0], +args[1], +args[2], +args[3])
  } else if (type === 'QUERY') {
    return +cube.query(+args[0], +args[1], +args[2], +args[3], +args[4], +args[5])
  }
}
module.exports = {
  processData
}
