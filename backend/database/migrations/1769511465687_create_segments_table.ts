import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'segments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('verse_id').unsigned().references('id').inTable('verses').onDelete('CASCADE')
      table.integer('segment_number').notNullable()
      table.text('text').notNullable()

      table.unique(['verse_id', 'segment_number'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
