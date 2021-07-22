
const request = require('supertest')
const tooBusy = require('toobusy-js')
const app = require('../../src/app')

describe('Check if errors are getting out gracefully', () => {
  afterAll(() => {
    tooBusy.shutdown()
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

  it('should return a 503 error when too many requests are made', done => {
    tooBusy.maxLag(10)
    request(app)
      .get('/cep/')
      .expect(503)
      .end((err, response) => {
        if (err) {
          return done(err)
        }

        expect(response.body).toHaveProperty('message')
        expect(response.body.message).toBe('Server is currently busy. Try in a few minutes.')
        done()
      })
  })
})
