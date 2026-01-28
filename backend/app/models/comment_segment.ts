import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Comment from './comment.js'

export default class CommentSegment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare commentId: number

  @column()
  declare segmentNumber: number

  @column()
  declare text: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Comment)
  declare comment: BelongsTo<typeof Comment>

  @hasMany(() => Comment, {
    foreignKey: 'commentSegmentId',
  })
  declare comments: HasMany<typeof Comment>
}
