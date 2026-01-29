import { CommentType } from '../../types/comment_type.js'
import { CommentTarget } from '../../types/comment_target.js'

export interface CreateCommentDTO {
  target: CommentTarget
  type: CommentType
  content: string
  selectedText?: string
}
