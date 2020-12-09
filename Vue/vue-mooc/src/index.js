// const koa = require('koa')
// const path = require('path')
// const helmet = require('koa-helmet')
// const statics = require('koa-static')
// const router = require('./routes/routes')

import koa from 'koa';
import path from 'path';
import helmet from 'koa-helmet';
import statics from 'koa-static';
import router from './routes/routes';
import compose from 'koa-compose';
import jsonUtil from 'koa-json';
import koaBody from 'koa-body';
import cors from '@koa/cors';
import compress from 'koa-compress'

const app = new koa()
const isDevMode = (process.env.NODE_ENV == 'production' ? false : true)

// app.use(helmet())
// app.use(statics(path.join(__dirname, '../public')))
// app.use(router())

// koa-compose 集成中间件
const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, '../public')),
  cors(),
  jsonUtil({ pretty: false, param: 'pretty' }),
  helmet()
])

if (!isDevMode) {
  app.use(compress())
}

app.use(middleware)
app.use(router())

app.listen(3000)