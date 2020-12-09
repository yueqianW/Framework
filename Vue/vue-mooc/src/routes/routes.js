import combineRoutes from 'koa-combine-routers'
import aroute from './aRouter'
// const aroute = require('./aRouter')

export default combineRoutes(
  aroute,
  // broute
)