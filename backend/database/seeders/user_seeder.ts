import User from '#models/user'

export default class {
  async run() {
    await User.create({
      email: 'editor@test.com',
      password: 'secret',
    })
  }
}
