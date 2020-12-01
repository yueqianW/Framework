const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const koaBody = require('koa-body')

const app = new Koa()
const router = new Router()

router.prefix('/api')

router.get('/', ctx => {
  console.log(ctx)
  console.log(ctx.request)
  ctx.body = 'hello'
})

router.get('/api', ctx => {
  const params = ctx.request.query;
  console.log(params, params.name, params.age)

  // console.log(ctx)
  // console.log(ctx.request)
  ctx.body = 'hello api'
})

router.get('/async', async (ctx) => {
  let result = await new Promise(resolve => {
    setTimeout(() => {
      resolve('hello async')
    }, 2000)
  })
  ctx.body = result
})

router.post('/post', async (ctx) => {
  let { body } = ctx.request
  console.log(body, ctx.request)
  ctx.body = {
    ...body
  }
})

app.use(koaBody())
app.use(cors());
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)











