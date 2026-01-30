import User from '#models/user'
import type { LoginDTO } from '../dtos/auth/login.dto.js'
import type { RegisterDTO } from '../dtos/auth/register.dto.js'

export default class AuthRepository {
  async login(dto: LoginDTO) {
    return await User.verifyCredentials(dto.login, dto.password)
  }

  async register(dto: RegisterDTO) {
    return await User.create(dto)
  }

  async findByEmail(email: string) {
    return await User.findBy('email', email)
  }
}
