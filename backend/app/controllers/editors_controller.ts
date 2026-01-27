import type { HttpContext } from '@adonisjs/core/http'
import Book from '#models/book'
import Chapter from '#models/chapter'
import EditorService from '#services/editor_service'

export default class EditorsController {
  public async psalm({ params }: HttpContext) {
    const book = await Book.findByOrFail('slug', params.book)

    const chapter = await Chapter.query()
      .where('book_id', book.id)
      .where('chapter_number', params.chapter)
      .preload('verses', (v) => {
        v.preload('segments', (s) => {
          s.preload('comments')
        })
      })
      .firstOrFail()

    return EditorService.exportPsalm(book, chapter)
  }
}
