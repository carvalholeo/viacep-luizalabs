// @ts-check
const { param } = require('express-validator')

const cepValidator = [
  param('cepNumber')
    .trim()
    .escape()
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage('CEP é obrigatório')
    .isLength({ min: 9, max: 9 })
    .withMessage('CEP deve ter 9 dígitos (incluindo o hífen)')
    .isPostalCode('BR')
    .withMessage('CEP inválido')
]

module.exports = cepValidator
