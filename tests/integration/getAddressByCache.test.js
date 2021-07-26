const request = require('supertest')
const app = require('../../src/app')

describe('test page cache on requests', () => {
  it('should return an address with status 200', done => {
    request(app)
      .get('/cep/01001-000')
      .expect(200)
      .end((err, response) => {
        if (err) {
          return done(err)
        }

        expect(response.body).toHaveProperty('cep')
        expect(response.body.cep).toBe('01001-000')
        expect(response.body).toHaveProperty('rua')
        expect(response.body.rua).toBe('Praça da Sé')
        expect(response.body).toHaveProperty('bairro')
        expect(response.body.bairro).toBe('Sé')
        expect(response.body).toHaveProperty('cidade')
        expect(response.body.cidade).toBe('São Paulo')
        expect(response.body).toHaveProperty('estado')
        expect(response.body.estado).toBe('SP')
        expect(response.body).toHaveProperty('cep-geral')
        expect(response.body['cep-geral']).toBeFalsy()
        done()
      })
  })

  it('should return an address with status 302', done => {
    request(app)
      .get('/cep/01001-000')
      .expect(302)
      .end((err, response) => {
        if (err) {
          return done(err)
        }

        expect(response.body).toHaveProperty('cep')
        expect(response.body.cep).toBe('01001-000')
        expect(response.body).toHaveProperty('rua')
        expect(response.body.rua).toBe('Praça da Sé')
        expect(response.body).toHaveProperty('bairro')
        expect(response.body.bairro).toBe('Sé')
        expect(response.body).toHaveProperty('cidade')
        expect(response.body.cidade).toBe('São Paulo')
        expect(response.body).toHaveProperty('estado')
        expect(response.body.estado).toBe('SP')
        expect(response.body).toHaveProperty('cep-geral')
        expect(response.body['cep-geral']).toBeFalsy()
        done()
      })
  })
})
