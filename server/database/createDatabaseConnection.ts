import { getConnectionOptions, createConnection } from 'typeorm'
import config from './ormconfig'

export default async (): Promise<void> => {
  try {
    await createConnection(config).then((connect) =>
      console.log('connection success', connect.options)
    )
  } catch (e) {
    console.log('e', e)
  }
}
