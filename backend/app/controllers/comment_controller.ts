import CommentService from '#services/comment_service'
import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { CreateCommentDTO } from '../dtos/comments/create_comment.dto.js'
import { UpdateCommentDTO } from '../dtos/comments/update_comment.dto.js'
import { commentCreateValidator, commentUpdateValidator } from '#validators/comment_validator'

@inject()
export default class CommentsController {
  constructor(protected commentService: CommentService) {}

  async create({ request, auth }: HttpContext) {
    const dto = await request.validateUsing(commentCreateValidator)

    return this.commentService.create(dto as CreateCommentDTO, auth.user!.id as number)
  }

  async update({ params, request }: HttpContext) {
    const dto = await request.validateUsing(commentUpdateValidator)
    return await this.commentService.update(params.id, dto as UpdateCommentDTO)
  }

  async delete({ params }: HttpContext) {
    return await this.commentService.delete(params.id)
  }
}
