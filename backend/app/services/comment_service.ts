import CommentRepository from '../repositories/comment_repository.js'
import type { CreateCommentDTO } from '../repositories/comment_repository.js'

export default class CommentService {
  public static async addComment(dto: CreateCommentDTO) {
    return CommentRepository.create(dto)
  }

  public static async deleteComment(commentId: number) {
    await CommentRepository.delete(commentId)
  }
}
