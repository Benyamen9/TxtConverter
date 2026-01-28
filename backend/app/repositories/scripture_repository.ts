import Book from '#models/book'
import Chapter from '#models/chapter'

export default class ScriptureRepository {
  public static async getChapterByBookSlug(bookSlug: string, chapterNumber: number) {
    const book = await Book.findByOrFail('slug', bookSlug)

    const chapter = await Chapter.query()
      .where('book_id', book.id)
      .where('chapter_number', chapterNumber)
      .preload('verses', (v) => {
        v.orderBy('verse_number', 'asc')
        v.preload('segments', (s) => {
          s.orderBy('segment_number', 'asc')
          s.preload('comments', (c) => {
            c.preload('segments', (cs) => {
              cs.orderBy('segment_number', 'asc')
              cs.preload('comments')
            })
          })
        })
      })
      .firstOrFail()

    return { book, chapter }
  }
}
