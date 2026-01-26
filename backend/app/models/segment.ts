import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Comment from './comment.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Segment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare verseId: number

  @column()
  declare order: number

  @column()
  declare text: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Comment)
  declare comments: HasMany<typeof Comment>
}
