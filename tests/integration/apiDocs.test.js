const request = require('supertest')
const app = require('../../src/app')

describe('Check if API docs are being load', () => {
  it('should return 200', done => {
    request(app)
      .get('/api-docs/')
      .expect(200, done)
  })

  it('should have a HTML tag title with "Swagger UI" text', done => {
    request(app)
      .get('/api-docs/')
      .expect(200, /<title>Swagger UI<\/title>/, done)
  })

  it('should have a div with id "swagger-ui"', done => {
    request(app)
      .get('/api-docs/')
      .expect(200, /<div id="swagger-ui"><\/div>/, done)
  })
})
