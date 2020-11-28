const shop = process.env.SHOP;
const endpoint = `https://${shop}/admin/api/2020-10/graphql.json`;

export default {
  shop,
  endpoint
};
