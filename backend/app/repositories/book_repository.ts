import Book from '#models/book'

export default class BookRepository {
  static all() {
    return Book.query().preload('chapters')
  }
}
