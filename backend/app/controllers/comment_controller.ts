import CommentService from '#services/comment_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class CommentsController {
  store({ request, auth }: HttpContext) {
    return CommentService.create({
      ...request.body(),
      userId: auth.user!.id,
    })
  }

  update({ params, request }: HttpContext) {
    return CommentService.update(params.id, request.body())
  }

  delete({ params }: HttpContext) {
    return CommentService.delete(params.id)
  }
}
