import SegmentService from '#services/segment_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class SegmentsController {
  public async store({ request }: HttpContext) {
    const dto = request.only(['verseId', 'segmentNumber', 'text'])

    return SegmentService.create(dto)
  }

  public async update({ params, request }: HttpContext) {
    const dto = request.only(['text'])

    return SegmentService.update(Number(params.id), dto)
  }

  public async delete({ params }: HttpContext) {
    return SegmentService.delete(Number(params.id))
  }
}
