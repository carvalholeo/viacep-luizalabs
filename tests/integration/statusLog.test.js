const request = require('supertest')
const app = require('../../src/app')
const fs = require('fs')
const path = require('path')

describe('when some page is accessed', () => {

  it('should have a test log file of the status', done => {
    expect.assertions(4)
    request(app)
      .get('/test-path')
      .expect(404)
      .end((error, response) => {
        if (error) {
          return done(error)
        }

        const filePath = path.join(__dirname, '..', '..', 'logs', 'app.log')
        const file = fs.readFileSync(filePath, 'utf8')

        expect(file).toMatch(/\/test-path/)
        expect(file).toMatch(/GET/)
        expect(file).toMatch(/HTTP Access Log/)
        expect(file).toMatch(/404/)

        done()
      })
  })
})
