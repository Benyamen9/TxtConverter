import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Segment from './segment.js'
import CommentSegment from './comment_segment.js'
import User from './user.js'
import { CommentType } from '../types/comment_type.js'
import { CommentParentType } from '../types/comment_parent_type.js'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare author: string

  @column()
  declare source: string | null

  @column()
  declare type: CommentType

  @column()
  declare content: string

  @column()
  declare selectedText: string | null

  @column()
  declare parentType: CommentParentType

  @column()
  declare parentId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Segment)
  declare segment: BelongsTo<typeof Segment>

  @belongsTo(() => CommentSegment)
  declare commentSegment: BelongsTo<typeof CommentSegment>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany(() => CommentSegment)
  declare segments: HasMany<typeof CommentSegment>
}
