import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Book from '#models/book'
import Chapter from '#models/chapter'
import Verse from '#models/verse'
import Segment from '#models/segment'
import Comment, { CommentType } from '#models/comment'
import CommentSegment from '#models/comment_segment'
import User from '#models/user'

export default class extends BaseSeeder {
  public async run() {
    const user = await User.findByOrFail('email', 'editor@test.com')

    const book = await Book.firstOrCreate({
      slug: 'psalms',
      title: 'Psalms',
    })

    const chapter = await Chapter.firstOrCreate({
      bookId: book.id,
      chapterNumber: 1,
    })

    const verse = await Verse.firstOrCreate({
      chapterId: chapter.id,
      verseNumber: 1,
      text: 'Blessed is the man who did not walk in the counsel of the wicked.',
    })

    const segment = await Segment.firstOrCreate({
      verseId: verse.id,
      segmentNumber: 1,
      text: 'Blessed is the man',
    })

    const comment = await Comment.firstOrCreate({
      segmentId: segment.id,
      userId: user.id,
      author: 'Saint John Chrysostom',
      type: CommentType.SAINT_COMMENTARY,
      content: 'The blessings refer to the kingdom of heaven and eternal life.',
    })

    const commentSegment1 = await CommentSegment.firstOrCreate({
      commentId: comment.id,
      segmentNumber: 1,
      text: 'The blessings refer to the kingdom of heaven',
    })

    const commentSegment2 = await CommentSegment.firstOrCreate({
      commentId: comment.id,
      segmentNumber: 2,
      text: 'and eternal life',
    })

    await Comment.firstOrCreate({
      commentSegmentId: commentSegment1.id,
      userId: user.id,
      author: 'Editor',
      type: CommentType.TRANSLATOR_NOTE,
      content: 'Kingdom here should be understood as eschatological, not political.',
    })

    await Comment.firstOrCreate({
      commentSegmentId: commentSegment2.id,
      userId: user.id,
      author: 'Editor',
      type: CommentType.TRANSLATOR_NOTE,
      content: 'This refers to the promise of resurrection and immortality.',
    })

    await Comment.firstOrCreate({
      commentSegmentId: commentSegment1.id,
      userId: user.id,
      author: 'Editor',
      type: CommentType.CITATION,
      content: 'Matthew 5:3-12',
    })

    await Comment.firstOrCreate({
      commentSegmentId: commentSegment1.id,
      userId: user.id,
      author: 'Editor',
      type: CommentType.CITATION,
      content: 'John 3:16',
    })

    await Comment.firstOrCreate({
      commentSegmentId: commentSegment2.id,
      userId: user.id,
      author: 'Editor',
      type: CommentType.CITATION,
      content: 'John 11:25',
    })
  }
}
