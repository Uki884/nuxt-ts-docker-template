import Koa from 'koa'
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt'
import session from 'koa-session'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import { verifyRequest } from '@shopify/koa-shopify-auth'
import shopifyAuth from './middlewares/shopify-auth'
import fillShopQuery from './middlewares/fill-shop-query'
import router from './routes'
const app = new Koa()

// Import and Set Nuxt.js options
import config from '../nuxt.config'
config.dev = app.env !== 'production'

async function start() {
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
  const { SHOPIFY_API_SECRET } = process.env
  app.keys = [SHOPIFY_API_SECRET as string]

  app.use(session({ secure: true, sameSite: 'none' }, app))
  app.use(cors())
  app.use(bodyParser())
  app.use(fillShopQuery())
  app.use(shopifyAuth())
  app.use(verifyRequest())

  app.use((ctx: any) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
