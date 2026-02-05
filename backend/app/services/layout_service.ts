import CommentSegment from '#models/comment_segment'
import { PreloadedComment } from '../types/preloaded_models_type.js'

export default class LayoutService {
  renderComment(comment: PreloadedComment, indent = 0): string {
    let output = ''
    const prefix = '  '.repeat(indent)

    if (comment.segments && comment.segments.length > 0) {
      if (comment.type === 'citation') {
        output += `${prefix}Citation:\n`
        output += `${prefix}${comment.content}\n`
      } else {
        output += `${prefix}${comment.content}\n`
      }

      if (comment.segments && comment.segments.length > 0) {
        comment.segments.forEach((segment: CommentSegment) => {
          output += `${prefix}Part of comment:\n`
          output += `${prefix}${segment.text}\n`
          output += `${prefix}Comment:\n`

          if (segment.comments && segment.comments.length > 0) {
            segment.comments.forEach((childComment: any) => {
              output += this.renderComment(childComment, indent + 1)
            })
          }
        })
      }
    } else {
      if (comment.type === 'citation') {
        output += `${prefix}Citation:\n`
        output += `${prefix}${comment.content}\n`
      } else {
        output += `${prefix}${comment.content}\n`
      }
    }

    return output
  }

  line(text: string): string {
    return `${text}\n`
  }

  doubleLine(text: string): string {
    return `${text}\n\n`
  }

  label(label: string): string {
    return `${label}:\n`
  }
}
