import SegmentService from '#services/segment_service'
import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'

@inject()
export default class SegmentsController {
  constructor(protected segmentService: SegmentService) {}

  async create({ request }: HttpContext) {
    const dto = request.only(['verseId', 'segmentNumber', 'text'])

    return this.segmentService.create(dto)
  }

  async update({ params, request }: HttpContext) {
    const dto = request.only(['text', 'segmentNumber'])

    return this.segmentService.update(Number(params.id), dto)
  }

  async delete({ params }: HttpContext) {
    return this.segmentService.delete(Number(params.id))
  }

  async findById({ params }: HttpContext) {
    return this.segmentService.findById(Number(params.id))
  }
}
