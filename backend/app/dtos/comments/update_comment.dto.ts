import { CommentType } from '../../types/comment_type.js'

export interface UpdateCommentDTO {
  content?: string
  selectedText?: string | null
  source?: string | null
  author?: string | null
  type?: CommentType
}
