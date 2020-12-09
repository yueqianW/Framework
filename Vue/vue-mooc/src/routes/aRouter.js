// const Router = require('koa-router')
// const a = require('../api/a')

import Router from 'koa-router';
import a from '../api/a';

const router = new Router()
router.get('/a', a.demo)

export default router
