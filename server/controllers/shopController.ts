import { ShopService } from '../services/shopService'
export default {
  index: async (ctx: any) => {
    const shopService = new ShopService(ctx)
    const result = await shopService.getMyShop()
    ctx.body = result
  }
}
