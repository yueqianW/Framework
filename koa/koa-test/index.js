const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  ctx.body = 'hello'
})
app.listen(3001)

console.log('on port 3001');