// @ts-check
const getCep = require('../services/getCep')

const cepController = {
  getCep: async (req, res) => {
    const { cepNumber } = req.params
    let cepClean = cepNumber.replace(/-/g, '')
    let query = {}

    for (let index = 7; index >= 0; index--) {
      query = await getCep(cepClean)
      const cepArray = cepClean.split('')

      if (query.data.erro) {
        cepArray[index] = '0'
        cepClean = cepArray.join('')
        continue
      }
      break
    }

    if (query.data.erro) {
      return res.status(404).json({
        message: 'CEP inválido'
      })
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
      estado: uf
    }

    if (logradouro === '') {
      data['cep-geral'] = true
    }

    return res.status(200).json({ ...data })
  }
}

module.exports = cepController
