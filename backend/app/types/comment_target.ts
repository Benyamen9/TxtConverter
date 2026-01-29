// app/types/comment_target.ts
export type CommentTarget =
  | { type: 'segment'; segmentId: number }
  | { type: 'comment'; commentId: number }
