// @ts-check
const toobusy = require('toobusy-js')

toobusy.maxLag(100)

/**
 * Function to handle with event loop blocked or with some lag.
 * @param {Request} req Object with the Request
 * @param {Response} res Object to handle with response
 * @param {Function} next Callback to be called if no errors occurred.
 * @return {Response} Returns with response object if a error were found.
 */
function tooBusyMiddleware (req, res, next) {
  if (toobusy()) {
    return res
      .status(503)
      .json({ message: 'Server is currently busy. Try in a few minutes.' })
  }

  next()
}

module.exports = tooBusyMiddleware
