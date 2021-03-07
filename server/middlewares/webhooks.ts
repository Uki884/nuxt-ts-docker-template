import { DeliveryMethod, Options } from '@shopify/koa-shopify-webhooks'
import { ApiVersion } from '@shopify/koa-shopify-graphql-proxy'

export const getWebhookScheme = (type, payload) => {
  const { HOST } = process.env
  const deliveryMethod = DeliveryMethod.Http
  const apiVersion = (ApiVersion as any).October20
  const { accessToken, shop } = payload
  const schemes: { [key: string]: Options } = {
    orderCreate: {
      address: `${HOST}/webhooks/orders/create`,
      topic: 'ORDERS_CREATE',
      deliveryMethod,
      apiVersion,
      shop,
      accessToken
    },
    orderUpdate: {
      address: `${HOST}/webhooks/orders/updated`,
      topic: 'ORDERS_UPDATED',
      deliveryMethod,
      apiVersion,
      shop,
      accessToken
    },
    orderCancel: {
      address: `${HOST}/webhooks/orders/cancelled`,
      topic: 'ORDERS_CANCELLED',
      deliveryMethod,
      apiVersion,
      shop,
      accessToken
    },
    appUninstalled: {
      address: `${HOST}/webhooks/app/uninstalled`,
      topic: 'APP_UNINSTALLED',
      deliveryMethod,
      apiVersion,
      shop,
      accessToken
    },
    productCreate: {
      address: `${HOST}/webhooks/products/create`,
      topic: 'PRODUCTS_CREATE',
      deliveryMethod,
      apiVersion,
      shop,
      accessToken
    }
  }
  return schemes[type]
}
