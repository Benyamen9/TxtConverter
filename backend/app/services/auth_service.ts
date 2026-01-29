import AuthRepository from '../repositories/auth_repository.js'

export default class AuthService {
  static login(dto: any) {
    return AuthRepository.login(dto)
  }

  static register(dto: any) {
    return AuthRepository.register(dto)
  }
}
