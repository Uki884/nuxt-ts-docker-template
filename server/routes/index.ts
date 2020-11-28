import Router from '@koa/router';
import apiRouter from './apiRouter';
import { verifyRequest } from '@shopify/koa-shopify-auth';

const router = new Router()

// api route
router.use('/api', verifyRequest(), apiRouter.routes(), apiRouter.allowedMethods())
export default router
