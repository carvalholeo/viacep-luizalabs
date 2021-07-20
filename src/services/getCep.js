// @ts-check
const viacepApi = require('./api/viacepApi')

/**
 * @function getCep
 * @description Returns address associated to the CEP informed
 * @param {string} cep - Address CEP
 * @returns {Promise<object>} - Returns the address from CEP informed
 */
function getCep (cep) {
  return new Promise((resolve, reject) => {
    viacepApi.get(`${cep}/json`)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

module.exports = getCep
