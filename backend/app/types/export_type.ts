import Book from '../models/book.js'
import { PreloadedChapter } from './preloaded_models_type.js'

export interface ScriptureChapterResult {
  book: Book
  chapter: PreloadedChapter
}
