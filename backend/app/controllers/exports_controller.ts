import type { HttpContext } from '@adonisjs/core/http'
import ScriptureExportService from '#services/scripture_export_service'

export default class ExportsController {
  public async scripture({ params }: HttpContext) {
    return ScriptureExportService.exportScriptureBySlug(params.book, Number(params.chapter))
  }
}
