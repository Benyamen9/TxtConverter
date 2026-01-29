import { CommentType } from '../types/comment_type.js'

export function renderComment(comment: any, indent = 0): string {
  let output = ''
  const prefix = '  '.repeat(indent)

  if (comment.type === CommentType.CITATION) {
    output += `${prefix}Citation:\n`
    output += `${prefix}${comment.content}\n`
  } else {
    output += `${prefix}${comment.content}\n`
  }

  if (comment.segments && comment.segments.length > 0) {
    comment.segments.forEach((segment: any) => {
      output += `${prefix}Part of comment:\n`
      output += `${prefix}${segment.text}\n`
      output += `${prefix}Comment:\n`

      if (segment.comments && segment.comments.length > 0) {
        segment.comments.forEach((childComment: any) => {
          output += renderComment(childComment, indent + 1)
        })
      }
    })
  }

  return output
}
