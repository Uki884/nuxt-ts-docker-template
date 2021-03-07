import { AxiosInstance } from 'axios'
import { createRequest } from '../../api/shopify'
const resource = `locations`

export class LocationApi {
  axios: AxiosInstance
  constructor(domain: string, accessToken: string) {
    this.axios = createRequest(domain, accessToken)
  }

  async getLocations() {
    return await this.axios.get(`${resource}.json`)
  }
}
