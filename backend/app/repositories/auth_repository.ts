import User from '#models/user'
import type { LoginDTO } from '../dtos/auth/login.dto.js'
import type { RegisterDTO } from '../dtos/auth/register.dto.js'

export default class AuthRepository {
  public static async login(dto: LoginDTO): Promise<User> {
    return User.verifyCredentials(dto.login, dto.password)
  }

  public static async register(dto: RegisterDTO): Promise<User> {
    return User.create({
      email: dto.email,
      password: dto.password,
      fullName: dto.fullName,
    })
  }
}
