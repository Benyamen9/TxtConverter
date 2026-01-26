import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Segment from './segment.js'

export default class Verse extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare chapterId: number

  @column()
  declare verseNumber: number

  @column()
  declare text: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Segment)
  declare segments: HasMany<typeof Segment>
}
