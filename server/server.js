const express = require('express')
const jsonServer = require('json-server')
const path = require('path')
const compression = require('compression')

const jwtCheck = require('./infra/jwt/jwt')

const port = process.env.PORT || 3001

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(compression())
server.use(express.static(path.resolve(__dirname, '../build')))

server.use(middlewares)
server.use(jwtCheck)
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running on port ' + port)
})
