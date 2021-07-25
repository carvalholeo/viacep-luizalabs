test('info logs are being showed on console', done => {
  const logs = require('../../src/services/log/logger')
  const response = logs.info('information log test message')
  response.query({fields: ['message']}, (err, results) => {
    if (err) {
      done(err)
    }
    const message = results.file.some(result => result.message === 'information log test message')
    expect(message).toBe(true)
    done()
  })
})
