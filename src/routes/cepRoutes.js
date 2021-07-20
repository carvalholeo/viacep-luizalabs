// @ts-check
const { Router } = require('express')
const cepController = require('../controllers/cepController')

const cepValidator = require('../validators/cepValidator')
const validatorMiddleware = require('../middlewares/validatorMiddleware')

const router = Router()

router.get('/:cepNumber',
  cepValidator,
  validatorMiddleware,
  cepController.getCep)

module.exports = router
