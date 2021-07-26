
/**
 * Middleware to answer client with cached results.
 * @param {Request} req Object with the Request
 * @param {Response} res Object to handle with response
 * @param {Function} next Callback to be called if there isn't a response in cache.
 * @return {Response} Returns with response object if theres a cached previously response.
 */
function hashMapMiddleware (req, res, next) {
  const { map } = req
  const url = `${req.baseUrl}${req.path}`

  const isCached = map.has(url)

  if (isCached) {
    const cachedResponse = map.get(url)
    return res.status(302).json(cachedResponse)
  }
  next()
}

module.exports = hashMapMiddleware
