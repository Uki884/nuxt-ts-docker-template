import shopifyAuth from '@shopify/koa-shopify-auth'
import { registerWebhook } from '@shopify/koa-shopify-webhooks'
import { getWebhookScheme } from './webhooks'

const { SHOPIFY_API_KEY, SHOPIFY_API_SECRET, SCOPES } = process.env

export default () => {
  return shopifyAuth({
    apiKey: SHOPIFY_API_KEY as string,
    secret: SHOPIFY_API_SECRET as string,
    scopes: [SCOPES as string],
    accessMode: 'offline',
    afterAuth(ctx) {
      const { shop, accessToken } = (ctx.session as unknown) as {
        shop: string
        accessToken: string
      }
      ctx.cookies.set('shopOrigin', shop, {
        httpOnly: false,
        secure: true,
        sameSite: 'none'
      })
      ctx.redirect('/')
    }
  })
}

const registerWebhooks = async (shop: string, accessToken: string) => {
  const webhookList = ['productsUpdate', 'appUninstalled', 'productsDelete']
  for (const webhook of webhookList) {
    const scheme = getWebhookScheme(webhook, { accessToken, shop })
    const registration = await registerWebhook(scheme)
    if (registration.success) {
      console.log(
        `Successfully registered ${webhook} webhook!`,
        registration.result.data.webhookSubscriptionCreate
      )
    } else {
      console.log(
        `Failed to register ${webhook} webhook`,
        registration.result.data.webhookSubscriptionCreate
      )
    }
  }
}
