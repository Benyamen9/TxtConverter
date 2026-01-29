import Comment from '#models/comment'
import type { CreateCommentDTO } from '../dtos/comments/create_comment.dto.js'
import type { UpdateCommentDTO } from '../dtos/comments/update_comment.dto.js'

export default class CommentRepository {
  static create(dto: CreateCommentDTO) {
    return Comment.create(dto)
  }

  static async update(id: number, dto: UpdateCommentDTO) {
    const comment = await Comment.findOrFail(id)
    comment.merge(dto)
    await comment.save()
    return comment
  }

  static async delete(id: number) {
    const comment = await Comment.findOrFail(id)
    await comment.delete()
  }
}
