import shopService from '../services/shopService'
export default {
  index: async (ctx: any) => {
    const result = await shopService.getMyShop(ctx)
    ctx.body = result
  }
}
