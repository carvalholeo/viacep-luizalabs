// @ts-check
const { Router } = require('express')
const cepController = require('../controllers/cepController')

const router = Router()

router.get('/:cepNumber', cepController.getCep)

module.exports = router
