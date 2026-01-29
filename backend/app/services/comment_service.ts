import CommentRepository from '../repositories/comment_repository.js'

export default class CommentService {
  static create(dto: any) {
    return CommentRepository.create(dto)
  }

  static update(id: number, dto: any) {
    return CommentRepository.update(id, dto)
  }

  static delete(id: number) {
    return CommentRepository.delete(id)
  }
}
