import Segment from '#models/segment'
import { CreateSegmentDTO } from '../dtos/segments/create_segment.dto.js'
import { UpdateSegmentDTO } from '../dtos/segments/update_segment.dto.js'

export default class SegmentRepository {
  public static async create(dto: CreateSegmentDTO) {
    return Segment.create(dto)
  }

  public static async findById(id: number) {
    return Segment.findOrFail(id)
  }

  public static async update(segment: Segment, dto: UpdateSegmentDTO) {
    if (dto.text !== undefined) {
      segment.text = dto.text
    }

    await segment.save()
    return segment
  }

  public static async delete(segment: Segment) {
    await segment.delete()
  }
}
