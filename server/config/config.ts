require('dotenv').config()
const database = process.env.DB_NAME || 'shopify_db'
const username = process.env.DB_USER || 'postgres'
const password = process.env.DB_PASSWORD || 'password'
const host = process.env.DB_HOST || 'db'
const port = process.env.DB_PORT || '5432'
console.log(
  'port',
  port,
  'username',
  username,
  'database',
  process.env.DB_HOST,
  database
)

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    port,
    dialect: 'postgres'
  },
  test: {
    username,
    password,
    database,
    host: '127.0.0.1',
    port,
    dialect: 'postgres'
  },
  production: {
    username,
    password,
    database,
    host,
    port,
    dialect: 'postgres'
  }
}
