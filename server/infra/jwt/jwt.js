const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

module.exports = () => jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://deliverer.auth0.com/.well-known/jwks.json'
  }),
  issuer: 'https://deliverer.auth0.com/',
  algorithms: ['RS256']
})
