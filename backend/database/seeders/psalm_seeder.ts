import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Book from '#models/book'
import Chapter from '#models/chapter'
import Verse from '#models/verse'
import Segment from '#models/segment'
import Comment from '#models/comment'

export default class extends BaseSeeder {
  public async run() {
    const book = await Book.create({
      slug: 'psalms',
      title: 'Psalms',
    })

    const chapter = await Chapter.create({
      bookId: book.id,
      chapterNumber: 1,
    })

    const verse = await Verse.create({
      chapterId: chapter.id,
      verseNumber: 1,
      text: 'Blessed is the man who did not walk in the counsel of the wicked.',
    })

    const segment = await Segment.create({
      verseId: verse.id,
      segmentNumber: 1,
      text: 'Blessed is the man',
    })

    await Comment.create({
      segmentId: segment.id,
      author: 'Saint John Chrysostom',
      type: 'saint_commentary',
      content: 'The blessings refer to the kingdom of heaven.',
    })
  }
}
