import { useGraphQL, Request } from '../utils/request'
import shopQuery from '../graphql/queries/shop'
export class ShopService {
  ctx: any
  constructor(ctx) {
    this.ctx = ctx
  }

  async getMyShop() {
    const { useRequest } = useGraphQL(this.ctx)
    const result = await useRequest(shopQuery.getShop)
    console.log(result)
    return result
  }
}
