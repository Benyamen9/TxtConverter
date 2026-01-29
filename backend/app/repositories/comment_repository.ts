import Comment from '#models/comment'
import type { CommentType } from '../types/comment_type.js'

export interface CreateCommentDTO {
  userId: number
  content: string
  type: CommentType
  segmentId?: number | null
  CommentSegmentId?: number | null
}

export default class CommentRepository {
  public static async create(dto: CreateCommentDTO): Promise<Comment> {
    return Comment.create({
      userId: dto.userId,
      content: dto.content,
      type: dto.type,
      segmentId: dto.segmentId ?? null,
      commentSegmentId: dto.CommentSegmentId ?? null,
    })
  }

  public static async delete(commentId: number): Promise<void> {
    const comment = await Comment.findOrFail(commentId)
    await comment.delete()
  }
}
