
const request = require('supertest')
const app = require('../../src/app')

describe('Check if errors are getting out gracefully', () => {
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
