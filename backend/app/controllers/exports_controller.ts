import type { HttpContext } from '@adonisjs/core/http'
import drive from '@adonisjs/drive/services/main'
import ScriptureExportService from '#services/scripture_export_service'

export default class ExportsController {
  public async scripture({ params }: HttpContext) {
    const content = await ScriptureExportService.buildExport(params.book, Number(params.chapter))

    const filePath = `${params.book}/psalm_${params.chapter}.txt`
    await drive.use('fs').put(filePath, content)

    return {
      path: filePath,
      url: `/exports/${filePath}`,
      message: 'Export generated successfully',
    }
  }
}
