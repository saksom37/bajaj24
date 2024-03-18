const { handleData } = require('../controllers/handleData')

const router = require('express').Router()

router.post('/bfhl',handleData)

module.exports = router