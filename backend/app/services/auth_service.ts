import type { LoginDTO } from '../dtos/auth/login.dto.js'
import type { RegisterDTO } from '../dtos/auth/register.dto.js'
import User from '#models/user'
import { inject } from '@adonisjs/core'

@inject()
export default class AuthService {
  async login(dto: LoginDTO) {
    return User.verifyCredentials(dto.login, dto.password)
  }

  async register(dto: RegisterDTO) {
    const existingUser = await User.findBy('email', dto.email)
    if (existingUser) {
      throw new Error('Cet email est déjà utilisé')
    }

    return User.create(dto)
  }
}
