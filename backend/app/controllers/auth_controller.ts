import type { HttpContext } from '@adonisjs/core/http'
import AuthRepository from '../repositories/auth_repository.js'

export default class AuthController {
  public async login({ request, auth }: HttpContext) {
    const dto = request.only(['login', 'password'])

    const user = await AuthRepository.login(dto)
    const token = await auth.use('api').createToken(user)

    return { token: token.value!.release() }
  }

  public async register({ request, auth }: HttpContext) {
    const dto = request.only(['email', 'password', 'fullName'])

    const user = await AuthRepository.register(dto)
    const token = await auth.use('api').createToken(user)

    return { token: token.value!.release() }
  }
}
