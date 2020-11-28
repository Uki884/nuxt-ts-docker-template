export default () => {
  return async (ctx, next) => {
    if (process.env.NODE_ENV === 'development') {
      if (!ctx.request.query.shop) {
        ctx.request.query.shop = process.env.SHOP
      }
    }
    await next()
  }
}
