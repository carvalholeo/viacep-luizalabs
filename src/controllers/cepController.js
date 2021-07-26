// @ts-check
const getCep = require('../services/getCep')

const cepController = {
  getCep: async (req, res) => {
    const { map } = req
    const url = `${req.baseUrl}${req.path}`
    const { cepNumber } = req.params
    let cepClean = cepNumber.replace(/-/g, '')
    let query = {}

    for (let index = 7; index >= 0; index--) {
      query = await getCep(cepClean)
      const cepArray = cepClean.split('')

      if (query.data.logradouro === '') {
        break
      }

      if (query.data.erro) {
        cepArray[index] = '0'
        cepClean = cepArray.join('')
        continue
      }
      break
    }

    if (query.data.erro) {
      const response = {
        message: 'CEP inválido'
      }
      map.set(url, response)
      return res.status(404).json(response)
    }

    const {
      cep,
      logradouro,
      bairro,
      localidade,
      uf
    } = query.data

    const data = {
      cep,
      rua: logradouro,
      bairro,
      cidade: localidade,
      estado: uf,
      'cep-geral': false
    }

    if (logradouro === '') {
      data['cep-geral'] = true
    }
    map.set(url, data)
    return res.status(200).json({ ...data })
  }
}

module.exports = cepController
