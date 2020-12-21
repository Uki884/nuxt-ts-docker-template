import { useGraphQL, Request } from '../utils/request'
import shopQuery from '../graphql/queries/shop'

export default {
  async getMyShop(ctx) {
    const { useRequest } = useGraphQL(ctx)
    const result = await useRequest(shopQuery.getShop)
    console.log(result)
    return result
  }
}
