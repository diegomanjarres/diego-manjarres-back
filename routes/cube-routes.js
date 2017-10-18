var router = require('express').Router()

router.route('/processData')
  .get((req, res)=> {
    res.send('result')
  })

module.exports = router
