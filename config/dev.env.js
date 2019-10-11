'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  NEXUS_API_URL: '',
  NEXUS_IDENTITY_URL: ''
})
