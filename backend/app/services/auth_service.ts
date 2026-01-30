import AuthRepository from '../repositories/auth_repository.js'
import type { LoginDTO } from '../dtos/auth/login.dto.js'
import type { RegisterDTO } from '../dtos/auth/register.dto.js'
import { inject } from '@adonisjs/core'

@inject()
export default class AuthService {
  constructor(protected authRepository: AuthRepository) {}

  async login(dto: LoginDTO) {
    return await this.authRepository.login(dto)
  }

  async register(dto: RegisterDTO) {
    const existingUser = await this.authRepository.findByEmail(dto.email)
    if (existingUser) {
      throw new Error('Cet email est déjà utilisé')
    }

    return await this.authRepository.register(dto)
  }
}
