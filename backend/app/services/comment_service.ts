import Comment from '#models/comment'
import type { CreateCommentDTO } from '../dtos/comments/create_comment.dto.js'
import type { UpdateCommentDTO } from '../dtos/comments/update_comment.dto.js'

export default class CommentService {
  async create(dto: CreateCommentDTO, userId: number) {
    const createDto = { ...dto, userId }

    return Comment.create(createDto)
  }

  async update(id: number, dto: UpdateCommentDTO) {
    const comment = await Comment.findOrFail(id)
    comment.merge(dto)
    await comment.save()
    return comment
  }

  async delete(id: number) {
    const comment = await Comment.findOrFail(id)
    await comment.delete()
  }
}
