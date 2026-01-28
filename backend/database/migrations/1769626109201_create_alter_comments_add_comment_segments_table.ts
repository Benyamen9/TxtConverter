import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .integer('comment_segment_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('comment_segments')
        .onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('comment_segment_id')
    })
  }
}
