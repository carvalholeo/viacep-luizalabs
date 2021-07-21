// @ts-check
'use strict'
require('dotenv').config()
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const hpp = require('hpp')
const { serve, setup } = require('swagger-ui-express')

// @ts-ignore
const cepRoutes = require('./routes/cepRoutes')
const swaggerJson = require('../swagger.json')
// @ts-ignore
const tooBusyMiddleware = require('./middlewares/tooBusyMiddleware')
const bouncerLimiter = require('./middlewares/bouncerLimiterMiddleware')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', '')

app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(hpp())
// @ts-ignore
app.use(tooBusyMiddleware)

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.use(bouncerLimiter.block)

app.use('/cep', cepRoutes)
app.use('/api-docs', serve, setup(swaggerJson))

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json({ message: err.message })
})

module.exports = app
