import Comment from '#models/comment'
import CommentSegment from '#models/comment_segment'

export default class LayoutService {
  async renderComment(comment: Comment, indent = 0): Promise<string> {
    let output = ''
    const prefix = '  '.repeat(indent)

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

    return output
  }

  async line(text: string): Promise<string> {
    return `${text}\n`
  }

  async doubleLine(text: string): Promise<string> {
    return `${text}\n\n`
  }

  async label(label: string): Promise<string> {
    return `${label}:\n`
  }
}
