import User from '#models/user'
import type { LoginDTO } from '../dtos/auth/login.dto.js'
import type { RegisterDTO } from '../dtos/auth/register.dto.js'

export default class AuthRepository {
  static login(dto: LoginDTO) {
    return User.verifyCredentials(dto.login, dto.password)
  }

  static register(dto: RegisterDTO) {
    return User.create(dto)
  }
}
