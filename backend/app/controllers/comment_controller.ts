import type { HttpContext } from '@adonisjs/core/http'
import CommentService from '#services/comment_service'

export default class CommentsController {
  public async store({ request, auth }: HttpContext) {
    const user = auth.user!

    const dto = request.only(['content', 'type', 'segmentId', 'CommentSegmentId'])

    return CommentService.addComment({
      ...dto,
      userId: user.id,
    })
  }

  public async delete({ params }: HttpContext) {
    await CommentService.deleteComment(Number(params.id))
    return { success: true }
  }
}
