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

const app = new koa()

app.use(helmet())
app.use(statics(path.join(__dirname, '../public')))
app.use(router())
app.listen(3000)