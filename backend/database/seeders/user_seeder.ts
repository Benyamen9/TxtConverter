import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.firstOrCreate(
      { email: 'editor@test.com' },
      {
        email: 'editor@test.com',
        password: 'secret',
        fullName: 'Editor',
      }
    )
  }
}
