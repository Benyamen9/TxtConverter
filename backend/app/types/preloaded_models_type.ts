import Chapter from '../models/chapter.js'
import Comment from '../models/comment.js'
import CommentSegment from '../models/comment_segment.js'
import Segment from '../models/segment.js'
import Verse from '../models/verse.js'

export type PreloadedComment = Comment & {
  segments: PreloadedCommentSegment[]
}

export type PreloadedCommentSegment = CommentSegment & {
  comments: Comment[]
}

export type PreloadedSegment = Segment & {
  comments: PreloadedComment[]
}

export type PreloadedVerse = Verse & {
  segments: PreloadedSegment[]
}

export type PreloadedChapter = Chapter & {
  verses: PreloadedVerse[]
}
