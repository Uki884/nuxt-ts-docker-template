import { gql } from 'graphql-request'
const getShop = gql`
  query {
    shop {
      id
      name
      email
    }
    customers(first: 20) {
      edges {
        node {
          id
          displayName
          phone
        }
      }
    }
}
`

export default {
  getShop
}
