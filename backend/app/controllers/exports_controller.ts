import type { HttpContext } from '@adonisjs/core/http'
import drive from '@adonisjs/drive/services/main'
import ScriptureExportService from '#services/scripture_export_service'
import { inject } from '@adonisjs/core'
import type { ExportScriptureDTO } from '../dtos/exports/export_scripture.dto.js'
import { exportScriptureValidator } from '#validators/export_validator'

@inject()
export default class ExportsController {
  constructor(
    protected scriptureExportService: ScriptureExportService,
    protected exportValidator: {
      validate: (typeof exportScriptureValidator)['validate']
    }
  ) {}

  async scripture({ params }: HttpContext) {
    const validatedParams = (await params.validateUsing(
      exportScriptureValidator
    )) as ExportScriptureDTO

    const content = await this.scriptureExportService.buildExport(
      validatedParams.book,
      Number(validatedParams.chapter)
    )

    const filePath = `${validatedParams.book}/psalm_${validatedParams.chapter}.txt`
    await drive.use('fs').put(filePath, content)

    return {
      path: filePath,
      url: `/exports/${filePath}`,
      message: 'Export generated successfully',
    }
  }
}
