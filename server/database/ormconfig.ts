import { ConnectionOptions } from 'typeorm'
require('dotenv').config()

const config = {
  production: {
    url: process.env.DATABASE_URL,
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false
      }
    },
    entities: ['dist/server/database/entities/**/*.js'],
    migrations: ['dist/server/database/migrations/**/*.js'],
    subscribers: ['dist/server/database/subscribers/**/*.js']
  },
  development: {
    host: process.env.DB_HOST || '127.0.0.1', // dockerで接続するDBホスト名
    port: Number(process.env.DB_PORT) || 5432, // dockerで接続するport
    username: process.env.DB_USERNAME || 'postgres', // DBユーザ名
    password: process.env.DB_PASSWORD || 'password', // DBパスワード
    database: process.env.DB_NAME || 'developtment', // DB名
    entities: ['server/database/entities/**/*.ts'],
    migrations: ['server/server/database/migrations/**/*.ts'],
    subscribers: ['server/database/subscribers/**/*.ts']
  }
}

const databaseConfig =
  process.env.NODE_ENV === 'production' ? config.production : config.development
console.log('databaseConfig', databaseConfig)

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  synchronize: false,
  logging: ['error'],
  ...databaseConfig,
  cli: {
    entitiesDir: 'server/database/entities',
    migrationsDir: 'server/database/migrations',
    subscribersDir: 'server/database/subscribers'
  }
}

export default connectionOptions
