import { CreateSegmentDTO } from '../dtos/segments/create_segment.dto.js'
import { UpdateSegmentDTO } from '../dtos/segments/update_segment.dto.js'
import Segment from '#models/segment'

export default class SegmentService {
  async create(dto: CreateSegmentDTO) {
    return Segment.create(dto)
  }

  async update(segmentId: number, dto: UpdateSegmentDTO) {
    const segment = await this.findById(segmentId)

    if (dto.text !== undefined) {
      segment.text = dto.text
    }

    if (dto.segmentNumber !== undefined) {
      segment.segmentNumber = dto.segmentNumber
    }

    await segment.save()
    return segment
  }

  async delete(segmentId: number) {
    const segment = await this.findById(segmentId)
    await segment.delete()

    return { success: true }
  }

  async findById(segmentId: number) {
    return Segment.findOrFail(segmentId)
  }
}
