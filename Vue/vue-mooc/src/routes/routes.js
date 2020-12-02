const combineRoutes = require('koa-combine-routers')

const aroute = require('./aRouter')
const broute = require('./bRouter')

module.exports = combineRoutes(
  aroute,
  broute
)