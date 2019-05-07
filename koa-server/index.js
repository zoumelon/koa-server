const Koa = require('koa')
const app = new Koa()
const router = require('./router/index')
const bodyParser = require('koa-bodyparser')
const koaBody = require('koa-body')
var cors = require('koa2-cors')

app.use(cors())
app.use(bodyParser())
app.use(koaBody())

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8898)

console.log('node后台启动成功, 程序运行在 http://localhost:8898')
