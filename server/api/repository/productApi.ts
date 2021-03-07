import { AxiosInstance } from 'axios'
import { createRequest } from '../../api/shopify'
const resource = `products`

export class ProductApi {
  axios: AxiosInstance
  constructor(domain: string, accessToken: string) {
    this.axios = createRequest(domain, accessToken)
  }

  async getProducts(query) {
    return await this.axios.get(`${resource}.json`, { params: query })
  }

  async addProduct(payload) {
    return await this.axios.post(`${resource}.json`, payload)
  }

  // 商品バリエーション登録
  async addProductVariant(productId, payload) {
    try {
      const result = await this.axios.post(
        `${resource}/${productId}/variants.json`,
        payload
      )
      return result
    } catch (e) {
      console.log('addProductVariant error', e.data, e.response.data)
      return e.response
    }
  }

  // 商品画像登録
  async addProductImage(productId, payload) {
    try {
      const result = await this.axios.post(
        `${resource}/${productId}/images.json`,
        payload
      )
      return result
    } catch (e) {
      console.log('addProductImage error', e.data, e.response.data)
      return e.response
    }
  }

  // 商品バリエーション削除
  async deleteProductVariant(productId, variantId) {
    return await this.axios.delete(
      `${resource}/${productId}/variants/${variantId}.json`
    )
  }

  async updateProduct(productId, payload) {
    return await this.axios.patch(`${resource}/${productId}.json`, payload)
  }

  async updateVariant(variantId, payload) {
    return await this.axios.put(`variants/${variantId}.json`, payload)
  }

  async deleteProduct(productId) {
    return await this.axios.delete(`${resource}/${productId}.json`)
  }
}
