const { SearchShopById, CreateShops } = require('./data')

module.exports = {
  findById: async (ctx) => {
    console.log(ctx)
    let id = ctx.params.id;
    console.log(id)
    const shop = await SearchShopById(id);
    ctx.body = {
      status: 0,
      data: shop
    }
  },
  createShop: async (ctx) => {
    const shop = ctx.request.body
    console.log(shop)
    await CreateShops(shop)
    ctx.body = {
      status: 0
    }
  }
}