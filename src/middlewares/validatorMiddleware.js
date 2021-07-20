// @ts-check
'use strict'

const { validationResult } = require('express-validator')

/**
 * Function to handle with errors from Express Validator.
 * @param {Request} req Object with the Request
 * @param {Response} res Object to handle with response
 * @param {Function} next Callback to be called if no errors occurred.
 * @return {Response} Returns with response object if a error were found.
 */
function validatorMiddleware (req, res, next) {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res
      .status(406)
      .json({
        message: 'Your request is invalid. Here are the errors',
        errors: errors.mapped()
      })
  }

  next()
}

module.exports = validatorMiddleware
