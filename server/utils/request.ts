import qs from 'querystring'
import { GraphQLClient } from 'graphql-request'
import config from '../config/graphqlConfig'

interface Payload {
  body?: any | undefined
  params?: any
}

export const useGraphQL = (ctx) => {
  const { shop, accessToken } = ctx.session
  const graphQLClient = new GraphQLClient(config.endpoint, {
    headers: {
      'X-Shopify-Access-Token': accessToken
    }
  })
  const useRequest = async (payload: any, variables: null | any = null) => {
    try {
      const result = await graphQLClient.request(payload, variables)
      return result
    } catch (e) {
      console.log(e)
      return { errors: e.response.errors, status: 500 }
    }
  }
  return { useRequest }
}

export class Request {
  url: string
  accessToken: any
  shop: any
  headers: {
    'X-Shopify-Access-Token': string
    Accept: string
    'Content-Type': string
  }

  constructor(ctx) {
    const { shop, accessToken } = ctx.session
    this.url = `https://${shop}/admin/api/2020-10/`
    this.shop = shop
    this.accessToken = accessToken
    this.headers = {
      'X-Shopify-Access-Token': accessToken,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  request(method: 'GET' | 'POST' | 'PATCH' | 'DELETE') {
    return async (resource: string, payload: Payload) => {
      const paramString = payload.params
        ? '?' + qs.stringify(payload.params)
        : ''
      const requestUrl = `${this.url}${resource}.json${paramString}`
      console.log(requestUrl)
      const options = {
        method,
        headers: this.headers,
        body: payload.body ? JSON.stringify(payload.body) : undefined
      }
      const response = await fetch(requestUrl, options)
      const data = await response.json()
      return data
    }
  }

  async get(resource: string, payload: Payload) {
    const req = this.request('GET')
    return await req(resource, payload)
  }

  async post(resource: string, payload: Payload) {
    const req = this.request('POST')
    return await req(resource, payload)
  }

  async patch(resource: string, payload: Payload) {
    const req = this.request('PATCH')
    return await req(resource, payload)
  }

  async delete(resource: string, payload: Payload) {
    const req = this.request('DELETE')
    return await req(resource, payload)
  }
}
