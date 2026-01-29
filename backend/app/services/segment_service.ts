import SegmentRepository from '../repositories/segment_repository.js'
import { CreateSegmentDTO } from '../dtos/segments/create_segment.dto.js'
import { UpdateSegmentDTO } from '../dtos/segments/update_segment.dto.js'

export default class SegmentService {
  public static async create(dto: CreateSegmentDTO) {
    if (!dto.text.trim()) {
      throw new Error('Segment text cannot be empty')
    }

    return SegmentRepository.create(dto)
  }

  public static async update(segmentId: number, dto: UpdateSegmentDTO) {
    if (dto.text !== undefined && !dto.text.trim()) {
      throw new Error('Segment text cannot be empty')
    }

    const segment = await SegmentRepository.findById(segmentId)
    return SegmentRepository.update(segment, dto)
  }

  public static async delete(segmentId: number) {
    const segment = await SegmentRepository.findById(segmentId)
    await SegmentRepository.delete(segment)

    return { success: true }
  }
}
