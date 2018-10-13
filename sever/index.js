const Koa = require('koa')
const app = new Koa()
app.use(async (ctx, next) => {
    ctx.body = '预告片首页'
})
app.listen(3344)