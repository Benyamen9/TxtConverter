import ScriptureRepository from '../repositories/scripture_repository.js'
// import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'

@inject()
export default class ChaptersController {
  constructor(protected scriptureRepository: ScriptureRepository) {}

  // Todo
}
