import BookRepository from '../repositories/book_repository.js'
import type { HttpContext } from '@adonisjs/core/http'

export default class BooksController {
  index({}: HttpContext) {
    return BookRepository.all()
  }
}
