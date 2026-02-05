import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Book from '#models/book'
import Chapter from '#models/chapter'
import Verse from '#models/verse'
import Segment from '#models/segment'
import Comment from '#models/comment'
import CommentSegment from '#models/comment_segment'
import User from '#models/user'

export default class extends BaseSeeder {
  public async run() {
    // Récupérer ou créer l'utilisateur
    const user = await User.firstOrCreate(
      { email: 'translator@test.com' },
      {
        email: 'translator@test.com',
        password: 'password123',
        fullName: 'Test Translator',
      }
    )

    // Créer un deuxième utilisateur pour tester
    const user2 = await User.firstOrCreate(
      { email: 'reviewer@test.com' },
      {
        email: 'reviewer@test.com',
        password: 'password123',
        fullName: 'Test Reviewer',
      }
    )

    // ===== BOOK 1: Psalms =====
    const psalms = await Book.firstOrCreate(
      { slug: 'psalms' },
      {
        slug: 'psalms',
        title: 'Psalms',
      }
    )

    // Chapter 1
    const psalmsChapter1 = await Chapter.firstOrCreate(
      { bookId: psalms.id, chapterNumber: 1 },
      {
        bookId: psalms.id,
        chapterNumber: 1,
      }
    )

    // Verse 1
    const psalm1Verse1 = await Verse.firstOrCreate(
      { chapterId: psalmsChapter1.id, verseNumber: 1 },
      {
        chapterId: psalmsChapter1.id,
        verseNumber: 1,
        text: 'Blessed is the man who did not walk in the counsel of the wicked.',
      }
    )

    // Segments du verset 1
    const segment1 = await Segment.firstOrCreate(
      { verseId: psalm1Verse1.id, segmentNumber: 1 },
      {
        verseId: psalm1Verse1.id,
        segmentNumber: 1,
        text: 'Blessed is the man',
      }
    )

    const segment2 = await Segment.firstOrCreate(
      { verseId: psalm1Verse1.id, segmentNumber: 2 },
      {
        verseId: psalm1Verse1.id,
        segmentNumber: 2,
        text: 'who did not walk in the counsel of the wicked',
      }
    )

    // Verse 2
    const psalm1Verse2 = await Verse.firstOrCreate(
      { chapterId: psalmsChapter1.id, verseNumber: 2 },
      {
        chapterId: psalmsChapter1.id,
        verseNumber: 2,
        text: 'But his delight is in the law of the Lord, and on his law he meditates day and night.',
      }
    )

    const segment3 = await Segment.firstOrCreate(
      { verseId: psalm1Verse2.id, segmentNumber: 1 },
      {
        verseId: psalm1Verse2.id,
        segmentNumber: 1,
        text: 'But his delight is in the law of the Lord',
      }
    )

    // Segment orphelin (sans commentaires) pour tester la suppression
    await Segment.firstOrCreate(
      { verseId: psalm1Verse2.id, segmentNumber: 2 },
      {
        verseId: psalm1Verse2.id,
        segmentNumber: 2,
        text: 'and on his law he meditates day and night',
      }
    )

    // Verse 3 pour avoir plus de données
    const psalm1Verse3 = await Verse.firstOrCreate(
      { chapterId: psalmsChapter1.id, verseNumber: 3 },
      {
        chapterId: psalmsChapter1.id,
        verseNumber: 3,
        text: 'He is like a tree planted by streams of water.',
      }
    )

    const segment5 = await Segment.firstOrCreate(
      { verseId: psalm1Verse3.id, segmentNumber: 1 },
      {
        verseId: psalm1Verse3.id,
        segmentNumber: 1,
        text: 'He is like a tree planted by streams of water',
      }
    )

    // Chapter 2 pour tester l'export
    const psalmsChapter2 = await Chapter.firstOrCreate(
      { bookId: psalms.id, chapterNumber: 2 },
      {
        bookId: psalms.id,
        chapterNumber: 2,
      }
    )

    const psalm2Verse1 = await Verse.firstOrCreate(
      { chapterId: psalmsChapter2.id, verseNumber: 1 },
      {
        chapterId: psalmsChapter2.id,
        verseNumber: 1,
        text: 'Why do the nations rage and the peoples plot in vain?',
      }
    )

    await Segment.firstOrCreate(
      { verseId: psalm2Verse1.id, segmentNumber: 1 },
      {
        verseId: psalm2Verse1.id,
        segmentNumber: 1,
        text: 'Why do the nations rage',
      }
    )

    await Segment.firstOrCreate(
      { verseId: psalm2Verse1.id, segmentNumber: 2 },
      {
        verseId: psalm2Verse1.id,
        segmentNumber: 2,
        text: 'and the peoples plot in vain',
      }
    )

    // ===== BOOK 2: Matthew =====
    const matthew = await Book.firstOrCreate(
      { slug: 'matthew' },
      {
        slug: 'matthew',
        title: 'Gospel of Matthew',
      }
    )

    const matthewChapter1 = await Chapter.firstOrCreate(
      { bookId: matthew.id, chapterNumber: 1 },
      {
        bookId: matthew.id,
        chapterNumber: 1,
      }
    )

    const matthewVerse1 = await Verse.firstOrCreate(
      { chapterId: matthewChapter1.id, verseNumber: 1 },
      {
        chapterId: matthewChapter1.id,
        verseNumber: 1,
        text: 'The book of the genealogy of Jesus Christ, the son of David, the son of Abraham.',
      }
    )

    await Segment.firstOrCreate(
      { verseId: matthewVerse1.id, segmentNumber: 1 },
      {
        verseId: matthewVerse1.id,
        segmentNumber: 1,
        text: 'The book of the genealogy of Jesus Christ',
      }
    )

    // ===== BOOK 3: Genesis (pour avoir plus de données) =====
    const genesis = await Book.firstOrCreate(
      { slug: 'genesis' },
      {
        slug: 'genesis',
        title: 'Genesis',
      }
    )

    const genesisChapter1 = await Chapter.firstOrCreate(
      { bookId: genesis.id, chapterNumber: 1 },
      {
        bookId: genesis.id,
        chapterNumber: 1,
      }
    )

    const genesisVerse1 = await Verse.firstOrCreate(
      { chapterId: genesisChapter1.id, verseNumber: 1 },
      {
        chapterId: genesisChapter1.id,
        verseNumber: 1,
        text: 'In the beginning God created the heavens and the earth.',
      }
    )

    await Segment.firstOrCreate(
      { verseId: genesisVerse1.id, segmentNumber: 1 },
      {
        verseId: genesisVerse1.id,
        segmentNumber: 1,
        text: 'In the beginning God created the heavens and the earth',
      }
    )

    // ===== COMMENTAIRES =====

    // 1. Commentaire de saint sur segment1 (avec segments de commentaire)
    const saintComment = await Comment.firstOrCreate(
      {
        segmentId: segment1.id,
        userId: user.id,
        type: 'saint_commentary',
        author: 'Saint John Chrysostom',
      },
      {
        segmentId: segment1.id,
        parentCommentId: null,
        userId: user.id,
        author: 'Saint John Chrysostom',
        type: 'saint_commentary',
        content: 'The blessings refer to the kingdom of heaven and eternal life.',
        source: 'Homily on Psalms',
        selectedText: 'Blessed is the man',
      }
    )

    // Segments du commentaire du saint
    const commentSegment1 = await CommentSegment.firstOrCreate(
      { commentId: saintComment.id, segmentNumber: 1 },
      {
        commentId: saintComment.id,
        segmentNumber: 1,
        text: 'The blessings refer to the kingdom of heaven',
      }
    )

    const commentSegment2 = await CommentSegment.firstOrCreate(
      { commentId: saintComment.id, segmentNumber: 2 },
      {
        commentId: saintComment.id,
        segmentNumber: 2,
        text: 'and eternal life',
      }
    )

    // Commentaires sur le premier segment du commentaire
    await Comment.firstOrCreate(
      {
        commentSegmentId: commentSegment1.id,
        userId: user.id,
        type: 'translator_note',
        content: 'Kingdom here should be understood as eschatological, not political.',
      },
      {
        segmentId: null,
        commentSegmentId: commentSegment1.id,
        parentCommentId: null,
        userId: user.id,
        author: 'Translator',
        type: 'translator_note',
        content: 'Kingdom here should be understood as eschatological, not political.',
        source: null,
        selectedText: 'kingdom of heaven',
      }
    )

    await Comment.firstOrCreate(
      {
        commentSegmentId: commentSegment1.id,
        userId: user.id,
        type: 'citation',
        content: 'Matthew 5:3-12',
      },
      {
        segmentId: null,
        commentSegmentId: commentSegment1.id,
        parentCommentId: null,
        userId: user.id,
        author: 'Translator',
        type: 'citation',
        content: 'Matthew 5:3-12',
        source: 'Beatitudes',
        selectedText: null,
      }
    )

    await Comment.firstOrCreate(
      {
        commentSegmentId: commentSegment1.id,
        userId: user.id,
        type: 'citation',
        content: 'John 3:16',
      },
      {
        segmentId: null,
        commentSegmentId: commentSegment1.id,
        parentCommentId: null,
        userId: user.id,
        author: 'Translator',
        type: 'citation',
        content: 'John 3:16',
        source: 'Gospel',
        selectedText: null,
      }
    )

    // Commentaires sur le deuxième segment du commentaire
    await Comment.firstOrCreate(
      {
        commentSegmentId: commentSegment2.id,
        userId: user.id,
        type: 'translator_note',
        content: 'This refers to the promise of resurrection and immortality.',
      },
      {
        segmentId: null,
        commentSegmentId: commentSegment2.id,
        parentCommentId: null,
        userId: user.id,
        author: 'Translator',
        type: 'translator_note',
        content: 'This refers to the promise of resurrection and immortality.',
        source: null,
        selectedText: 'eternal life',
      }
    )

    await Comment.firstOrCreate(
      {
        commentSegmentId: commentSegment2.id,
        userId: user.id,
        type: 'citation',
        content: 'John 11:25',
      },
      {
        segmentId: null,
        commentSegmentId: commentSegment2.id,
        parentCommentId: null,
        userId: user.id,
        author: 'Translator',
        type: 'citation',
        content: 'John 11:25',
        source: 'Jesus and Lazarus',
        selectedText: null,
      }
    )

    // 2. Note du traducteur (commentaire direct sur segment)
    const translatorNote1 = await Comment.firstOrCreate(
      {
        segmentId: segment1.id,
        userId: user.id,
        type: 'translator_note',
        author: 'Translator',
        content: 'The Greek word μακάριος (makarios) means blessed or happy.',
      },
      {
        segmentId: segment1.id,
        parentCommentId: null,
        userId: user.id,
        author: 'Translator',
        type: 'translator_note',
        content: 'The Greek word μακάριος (makarios) means blessed or happy.',
        source: null,
        selectedText: 'Blessed',
      }
    )

    // 3. Citations (commentaires directs sur segment)
    await Comment.firstOrCreate(
      {
        segmentId: segment1.id,
        userId: user.id,
        type: 'citation',
        content: 'Matthew 5:3-12',
      },
      {
        segmentId: segment1.id,
        parentCommentId: null,
        userId: user.id,
        author: 'Translator',
        type: 'citation',
        content: 'Matthew 5:3-12',
        source: 'Beatitudes',
        selectedText: null,
      }
    )

    await Comment.firstOrCreate(
      {
        segmentId: segment2.id,
        userId: user.id,
        type: 'citation',
        content: 'Proverbs 4:14-15',
      },
      {
        segmentId: segment2.id,
        parentCommentId: null,
        userId: user.id,
        author: 'Translator',
        type: 'citation',
        content: 'Proverbs 4:14-15',
        source: 'On avoiding evil',
        selectedText: null,
      }
    )

    // 4. Réponse à un commentaire (commentaire sur commentaire)
    const replyToTranslator = await Comment.firstOrCreate(
      {
        parentCommentId: translatorNote1.id,
        userId: user2.id,
        type: 'translator_note',
        content: 'Should we add a note about the Hebrew equivalent as well?',
      },
      {
        segmentId: null,
        parentCommentId: translatorNote1.id,
        userId: user2.id,
        author: 'Reviewer',
        type: 'translator_note',
        content: 'Should we add a note about the Hebrew equivalent as well?',
        source: null,
        selectedText: null,
      }
    )

    // 5. Réponse à la réponse (commentaire imbriqué)
    await Comment.firstOrCreate(
      {
        parentCommentId: replyToTranslator.id,
        userId: user.id,
        type: 'translator_note',
        content: 'Good idea! The Hebrew is אַשְׁרֵי (ashrei).',
      },
      {
        segmentId: null,
        parentCommentId: replyToTranslator.id,
        userId: user.id,
        author: 'Translator',
        type: 'translator_note',
        content: 'Good idea! The Hebrew is אַשְׁרֵי (ashrei).',
        source: null,
        selectedText: null,
      }
    )

    // 6. Commentaire de saint sur segment2
    await Comment.firstOrCreate(
      {
        segmentId: segment2.id,
        userId: user.id,
        type: 'saint_commentary',
        author: 'Saint Augustine',
      },
      {
        segmentId: segment2.id,
        parentCommentId: null,
        userId: user.id,
        author: 'Saint Augustine',
        type: 'saint_commentary',
        content:
          'To avoid the counsel of the wicked is to reject their teachings and ways of life.',
        source: 'Exposition on Psalms',
        selectedText: 'counsel of the wicked',
      }
    )

    // 7. Commentaire simple sur segment3 (pour tester UPDATE)
    await Comment.firstOrCreate(
      {
        segmentId: segment3.id,
        userId: user.id,
        type: 'translator_note',
        content: 'This will be updated in tests',
      },
      {
        segmentId: segment3.id,
        parentCommentId: null,
        userId: user.id,
        author: 'Translator',
        type: 'translator_note',
        content: 'This will be updated in tests',
        source: null,
        selectedText: 'law of the Lord',
      }
    )

    // 8. Commentaire isolé (sans réponses) pour tester DELETE
    await Comment.firstOrCreate(
      {
        segmentId: segment5.id,
        userId: user2.id,
        type: 'translator_note',
        content: 'This comment will be deleted in tests',
      },
      {
        segmentId: segment5.id,
        parentCommentId: null,
        userId: user2.id,
        author: 'Reviewer',
        type: 'translator_note',
        content: 'This comment will be deleted in tests',
        source: null,
        selectedText: null,
      }
    )

    // 9. Note du traducteur avec source (pour tester UPDATE de source)
    await Comment.firstOrCreate(
      {
        segmentId: segment5.id,
        userId: user.id,
        type: 'translator_note',
        content: 'Metaphorical reference to spiritual stability',
      },
      {
        segmentId: segment5.id,
        parentCommentId: null,
        userId: user.id,
        author: 'Translator',
        type: 'translator_note',
        content: 'Metaphorical reference to spiritual stability',
        source: 'Hebrew Lexicon',
        selectedText: 'tree planted',
      }
    )

    // 10. Citation avec source complète
    await Comment.firstOrCreate(
      {
        segmentId: segment3.id,
        userId: user.id,
        type: 'citation',
        content: 'Joshua 1:8',
      },
      {
        segmentId: segment3.id,
        parentCommentId: null,
        userId: user.id,
        author: 'Translator',
        type: 'citation',
        content: 'Joshua 1:8',
        source: 'Book of Joshua - Meditation on the Law',
        selectedText: 'meditates day and night',
      }
    )

    console.log('✅ Seed completed successfully!')
    console.log('📚 Created 3 books: Psalms, Matthew, Genesis')
    console.log('📖 Created multiple chapters with verses and segments')
    console.log('💬 Created 10+ comments with various types and relationships')
    console.log('🎯 Includes:')
    console.log('   - Segments with/without comments')
    console.log('   - Comments with/without replies')
    console.log('   - All comment types (saint_commentary, translator_note, citation)')
    console.log('   - Comments with/without source and selectedText')
    console.log('   - Nested comment threads (3 levels deep)')
    console.log('   - Comment segments with their own comments')
    console.log(
      '👥 Created 2 users: translator@test.com, reviewer@test.com (password: password123)'
    )
  }
}
