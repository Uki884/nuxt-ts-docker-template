import { EntityRepository, Repository, Equal, getConnection } from 'typeorm'
import { Shop } from '../entities/Shop'

@EntityRepository(Shop)
export class ShopRepository extends Repository<Shop> {
  async registerShop(data) {
    const shop = await this.findOne({ name: data.name }, { withDeleted: true })
    let result
    let isAccountCreated
    if (shop) {
      const updateResult = await this.update(
        { id: shop.id },
        { ...data }
      ).catch((e) => console.log('registerShop update error', e))
      console.log('update shop', updateResult)
      result = updateResult
      isAccountCreated = false
      return { result, isAccountCreated }
    } else {
      const createResult = await this.save({
        ...data
      }).catch((e) => console.log('registerShop save error', e))
      console.log('save new shop', result)
      result = createResult
      isAccountCreated = true
      return { result, isAccountCreated }
    }
  }

  async deleteShop(shopId: number) {
    return await this.softDelete(shopId)
  }
}
