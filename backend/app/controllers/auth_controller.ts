import type { HttpContext } from '@adonisjs/core/http'
import AuthService from '#services/auth_service'
import { authLoginValidator, authRegisterValidate } from '#validators/auth_validator'
import { inject } from '@adonisjs/core'

@inject()
export default class AuthController {
  constructor(protected authService: AuthService) {}

  async login({ request, auth, response }: HttpContext) {
    const dto = await request.validateUsing(authLoginValidator)

    const user = await this.authService.login(dto)
    await auth.use('web').login(user)

    return response.ok({ message: 'Connexion réussie', user })
  }

  async register({ request, auth, response }: HttpContext) {
    const dto = await request.validateUsing(authRegisterValidate)

    const user = await this.authService.register(dto)
    await auth.use('web').login(user)

    return response.created({ message: 'Compte créé avec succès', user })
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.ok({ message: 'Déconnexion réussie' })
  }

  async getCurrentUser({ auth, response }: HttpContext) {
    return response.ok({ user: auth.use('web').user })
  }
}
