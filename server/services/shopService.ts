import request from '../utils/request';
import shopQuery from '../graphql/queries/shop';

export default {
  async getMyShop(ctx) {
    const { useRequest } = request.useGraphQL(ctx);
    const result = await useRequest(shopQuery.getShop)
    console.log(result);
    return result;
  }
}
