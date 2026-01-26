import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Verse from './verse.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Chapter extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare bookId: number

  @column()
  declare chapterNumber: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Verse)
  declare verses: HasMany<typeof Verse>
}
