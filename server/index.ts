import Koa from 'koa'
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt'
import session from 'koa-session'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import config from '../nuxt.config'
import router from './routes'
import createConnection from './database/createDatabaseConnection'

// Import and Set Nuxt.js options
const app = new Koa()
config.dev = app.env !== 'production'

async function start() {
  await createConnection()
  app.use(router.routes())
  app.use(router.allowedMethods())
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(session({ secure: true, sameSite: 'none' }, app))
  app.use(cors())
  app.use(bodyParser())

  app.use((ctx: any) => {
    ctx.status = 200
    ctx.respond = false
    ctx.req.ctx = ctx
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
