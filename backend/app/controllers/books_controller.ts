import type { HttpContext } from '@adonisjs/core/http'
import ScriptureRepository from '../repositories/scripture_repository.js'
import { inject } from '@adonisjs/core'

@inject()
export default class BooksController {
  constructor(protected scriptureRepo: ScriptureRepository) {}

  async index({}: HttpContext) {
    return await this.scriptureRepo.getAllBooksWithChapters()
  }
}
