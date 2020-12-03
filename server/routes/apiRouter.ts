import Router from '@koa/router'
import shopController from '../controllers/shopController'
const router = new Router()
router.get('/shop', shopController.index)

export default router
