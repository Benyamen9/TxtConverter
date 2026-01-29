import { CommentType } from '../../types/comment_type.js'

export interface UpdateCommentDTO {
  content?: string
  type?: CommentType
}
