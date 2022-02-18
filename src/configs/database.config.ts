import { join } from 'path'
import { registerAs } from '@nestjs/config'

export default registerAs('database', () => ({
  type: 'mysql',
  host: '101.35.4.147',
  port: 3306,
  username: 'root',
  password: 'ljlyyds123',
  database: 'hertz-qa', // grace-chat-v1
  entities: [join(__dirname, '../', '**/**.entity{.ts,.js}')],
  synchronize: true,
}))
