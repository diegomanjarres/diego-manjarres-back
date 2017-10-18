var assert = require('chai')
  .assert
var request = require('supertest')
var app = require('../../app.js')
var sampleInput =
  '2\n' +
  '4 5\n' +
  'UPDATE 2 2 2 4\n' +
  'QUERY 1 1 1 3 3 3\n' +
  'UPDATE 1 1 1 23\n' +
  'QUERY 2 2 2 4 4 4\n' +
  'QUERY 1 1 1 3 3 3\n' +
  '2 4\n' +
  'UPDATE 2 2 2 1\n' +
  'QUERY 1 1 1 1 1 1\n' +
  'QUERY 1 1 1 2 2 2\n' +
  'QUERY 2 2 2 2 2 2'

var expectedOutput = '4\n' +
  '4\n' +
  '27\n' +
  '0\n' +
  '1\n' +
  '1\n'
describe('Cube API Integration Tests', function() {
  it('should create an item', function(done) {
    request(app)
      .post('/cube/processData')
      .send({
        input: sampleInput
      })
      .end(function(err, res) {
        if (err) assert.fail()
        assert.equal(res.statusCode, 200)
        assert.equal(res.body.output, expectedOutput)
        done()
      })
  })
})
