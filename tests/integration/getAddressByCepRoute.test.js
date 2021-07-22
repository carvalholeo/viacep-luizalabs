const request = require('supertest')
const tooBusy = require('toobusy-js')
const app = require('../../src/app')

describe('GET /cep/:cepNumber', () => {
  afterAll(() => {
    tooBusy.shutdown()
  })

  it('should return an address when it\'s passed a valid CEP', done => {
    request(app)
      .get('/cep/05859-000')
      .expect(200)
      .end((err, response) => {
        if (err) {
          return done(err)
        }

        expect(response.body).toHaveProperty('cep')
        expect(response.body.cep).toBe('05859-000')
        expect(response.body).toHaveProperty('rua')
        expect(response.body.rua).toBe('Avenida Ellis Maas')
        expect(response.body).toHaveProperty('bairro')
        expect(response.body.bairro).toBe('Capão Redondo')
        expect(response.body).toHaveProperty('cidade')
        expect(response.body.cidade).toBe('São Paulo')
        expect(response.body).toHaveProperty('estado')
        expect(response.body.estado).toBe('SP')
        expect(response.body).toHaveProperty('cep-geral')
        expect(response.body['cep-geral']).toBeFalsy()
        done()
      })
  })

  it('should return an address when it\'s passed a invalid CEP', done => {
    request(app)
      .get('/cep/11450-111')
      .expect(200)
      .end((err, response) => {
        if (err) {
          return done(err)
        }

        expect(response.body).toHaveProperty('cep')
        expect(response.body.cep).toBe('11450-110')
        expect(response.body).toHaveProperty('rua')
        expect(response.body.rua).toBe('Rua Sergipe')
        expect(response.body).toHaveProperty('bairro')
        expect(response.body.bairro).toBe('Jardim Cunhambebe (Vicente de Carvalho)')
        expect(response.body).toHaveProperty('cidade')
        expect(response.body.cidade).toBe('Guarujá')
        expect(response.body).toHaveProperty('estado')
        expect(response.body.estado).toBe('SP')
        expect(response.body).toHaveProperty('cep-geral')
        expect(response.body['cep-geral']).toBeFalsy()
        done()
      })
  })

  it('shouldn\'t return an address when it\'s passed a general CEP', done => {
    request(app)
      .get('/cep/95590-000')
      .expect(200)
      .end((err, response) => {
        if (err) {
          return done(err)
        }

        expect(response.body).toHaveProperty('cep')
        expect(response.body.cep).toBe('95590-000')
        expect(response.body).toHaveProperty('rua')
        expect(response.body.rua).toBe('')
        expect(response.body).toHaveProperty('bairro')
        expect(response.body.bairro).toBe('')
        expect(response.body).toHaveProperty('cidade')
        expect(response.body.cidade).toBe('Tramandaí')
        expect(response.body).toHaveProperty('estado')
        expect(response.body.estado).toBe('RS')
        expect(response.body).toHaveProperty('cep-geral')
        expect(response.body['cep-geral']).toBeTruthy()
        done()
      })
  })

  it('should return an error when it\'s passed a invalid CEP', done => {
    jest.setTimeout(10000)
    request(app)
      .get('/cep/90000-000')
      .expect(404)
      .end((err, response) => {
        if (err) {
          return done(err)
        }

        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toBe('CEP inválido')
        done()
      })
  })

  it('should return an error when it isn\'t passed a CEP', done => {
    request(app)
      .get('/cep/90000')
      .expect(406)
      .end((err, response) => {
        if (err) {
          return done(err)
        }

        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toBe('Your request is invalid. Here are the errors')
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveProperty('cepNumber')
        expect(response.body.errors.cepNumber).toHaveProperty('msg')
        expect(response.body.errors.cepNumber.msg).toBe('CEP deve ter 9 dígitos (incluindo o hífen)')
        expect(response.body.errors.cepNumber).toHaveProperty('value')
        expect(response.body.errors.cepNumber.value).toBe('90000')
        expect(response.body.errors.cepNumber).toHaveProperty('param')
        expect(response.body.errors.cepNumber.param).toBe('cepNumber')
        expect(response.body.errors.cepNumber).toHaveProperty('location')
        expect(response.body.errors.cepNumber.location).toBe('params')
        done()
      })
  })

  it('should return an error when it isn\'t passed a valid CEP', done => {
    request(app)
      .get('/cep/05859----')
      .expect(406)
      .end((err, response) => {
        if (err) {
          return done(err)
        }

        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toBe('Your request is invalid. Here are the errors')
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveProperty('cepNumber')
        expect(response.body.errors.cepNumber).toHaveProperty('msg')
        expect(response.body.errors.cepNumber.msg).toBe('CEP inválido')
        expect(response.body.errors.cepNumber).toHaveProperty('value')
        expect(response.body.errors.cepNumber.value).toBe('05859----')
        expect(response.body.errors.cepNumber).toHaveProperty('param')
        expect(response.body.errors.cepNumber.param).toBe('cepNumber')
        expect(response.body.errors.cepNumber).toHaveProperty('location')
        expect(response.body.errors.cepNumber.location).toBe('params')
        done()
      })
  })

  it('should return a 404 error when it\'s accessed an invalid route', done => {
    request(app)
      .get('/cep/')
      .expect(404)
      .end((err, response) => {
        if (err) {
          return done(err)
        }

        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toBe('Not Found')
        done()
      })
  })
})
