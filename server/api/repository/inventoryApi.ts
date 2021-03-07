import { AxiosInstance } from 'axios'
import { createRequest } from '../../api/shopify'

const resource = `inventory_levels`

export class InventoryApi {
  axios: AxiosInstance
  constructor(domain: string, accessToken: string) {
    this.axios = createRequest(domain, accessToken)
  }

  async addInventoryItems(payload) {
    try {
      return await this.axios.post(`${resource}/set.json`, payload)
    } catch (e) {
      console.log('addInventoryItems', e)
    }
  }
}
