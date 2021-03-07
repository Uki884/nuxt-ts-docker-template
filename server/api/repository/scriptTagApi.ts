import { AxiosInstance } from 'axios'
import { createRequest } from '../shopify'

const resource = `script_tags`

export class ScriptTagApi {
  axios: AxiosInstance
  constructor(domain: string, accessToken: string) {
    this.axios = createRequest(domain, accessToken)
  }

  async getScripts(query) {
    return await this.axios.get(`${resource}.json`, { params: query })
  }

  async setScript(request) {
    return await this.axios.post(`${resource}.json`, request)
  }
}
