import Router from '@koa/router'
import apiRouter from './apiRouter'

const router = new Router()

// api route
router.use('/api', apiRouter.routes(), apiRouter.allowedMethods())
export default router
