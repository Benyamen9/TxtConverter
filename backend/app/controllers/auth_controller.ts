import type { HttpContext } from '@adonisjs/core/http'
import AuthService from '#services/auth_service'

export default class AuthController {
  async login({ request, auth }: HttpContext) {
    const user = await AuthService.login(request.only(['login', 'password']))
    const token = await auth.use('api').createToken(user)
    return { token: token.value!.release() }
  }

  async register({ request, auth }: HttpContext) {
    const user = await AuthService.register(request.only(['email', 'password', 'fullName']))
    const token = await auth.use('api').createToken(user)
    return { token: token.value!.release() }
  }
}
