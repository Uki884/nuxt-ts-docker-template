import axios from 'axios'

export const createRequest = (domain: string, accessToken: string) => {
  const baseURL = `https://${domain}/admin/api/2020-10`
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': accessToken
    },
    responseType: 'json'
  })
  return axiosInstance
}
