export default {
  index: async (ctx: any) => {
    const { shop, accessToken } = ctx.session
    console.log(shop)
    ctx.body = 'ok'
  }
}
