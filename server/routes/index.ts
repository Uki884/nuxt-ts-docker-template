import Router from '@koa/router'
import { verifyRequest } from '@shopify/koa-shopify-auth'
import apiRouter from './apiRouter'

const router = new Router()

// api route
router.use(
  '/api',
  verifyRequest(),
  apiRouter.routes(),
  apiRouter.allowedMethods()
)
export default router
