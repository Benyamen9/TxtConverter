import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'verses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('chapter_id')
        .unsigned()
        .references('id')
        .inTable('chapters')
        .onDelete('CASCADE')
      table.integer('verse_number').notNullable()
      table.text('text').notNullable()

      table.unique(['chapter_id', 'verse_number'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
