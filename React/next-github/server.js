const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const dev = process.env.NODE_ENV != 'production';
const app = next({ dev })
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  // router.get('/test/:id', (ctx) => {
  //   // ctx.body = `<p>request ${ctx.params.id}</p>`
  //   ctx.body = { success: true };
  //   ctx.set('Content-Type', 'application/json');
  // })

  // server.use(async (ctx, next) => {
  //   // const path = ctx.path;
  //   // const method = ctx.method;
  //   await next();
  // })

  // server.use(router.routes())

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false;
  })

  server.listen(3000, () => {
    console.log('111')
  })
})