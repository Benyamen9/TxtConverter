import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '../../app/models/user.js'

export default class extends BaseSeeder {
  public async run() {
    await User.create({
      fullName: 'John Doe',
      email: 'john@doe.com',
      password: 'password',
    })
  }
}
