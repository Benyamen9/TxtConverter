import { CommentType } from '../../types/comment_type.js'

export interface CreateCommentDTO {
  userId: number
  author: string
  source?: string | null
  type: CommentType
  content: string
  segmentId?: number | null
  parentCommentId?: number | null
}
