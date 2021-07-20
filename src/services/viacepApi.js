// @ts-check
const axios = require('axios')

const URL = 'http://viacep.com.br/ws/'

// @ts-ignore
const api = axios.create({
  baseURL: URL,
  timeout: 5000
})

module.exports = api
