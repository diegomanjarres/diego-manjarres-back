var router = require('express').Router()
var cubeLogic = require('../business/cube-logic.js')

router.route('/processData')
  .post((req, res) => {
    res.send({
      output: cubeLogic.processData(req.body.input)
    })
  })

module.exports = router
