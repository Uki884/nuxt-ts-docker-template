import { GraphQLClient } from 'graphql-request';
import config from '../config/graphqlConfig';

const useGraphQL = (ctx) => {
  const { shop, accessToken } = ctx.session
  console.log('accessToken', accessToken);
  const graphQLClient = new GraphQLClient(config.endpoint, {
    headers: {
      'X-Shopify-Access-Token': accessToken,
    },
  })
  const useRequest = async(payload, variables = undefined) => {
    try {
      const result = await graphQLClient.request(payload, variables)
      return result
    } catch (e) {
      console.log(e)
      return { errors: e.response.errors, status: 500 }
    }
  }
  return { useRequest }
}

export default {
  useGraphQL
}
