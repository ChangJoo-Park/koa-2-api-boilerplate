const Koa = require('koa')
const koaBody = require('koa-body')
const cors = require('@koa/cors')
const Router = require('koa-router');
const apis = require('../api')

const app = new Koa()
const router = new Router()

/**
 * See [bodyparser documents](https://github.com/koajs/bodyparser)
 */
app.use(koaBody())

/**
 * See [cors documents](https://github.com/koajs/cors)
 */
app.use(cors())

/**
 * See [Koa Router documents](https://github.com/alexmingoia/koa-router)
 */
apis.forEach(api => app.use(api.routes({ prefix: '/api' })))

app
  .use(router.routes())
  .use(router.allowedMethods())

module.exports = app
