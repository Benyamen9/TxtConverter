import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('segment_id')
      table.dropColumn('comment_segment_id')

      table.string('parent_type').notNullable()

      table.integer('parent_id').unsigned().notNullable()

      table.string('author').nullable().alter()
      table.string('source').nullable().alter()

      table.index(['parent_type', 'parent_id'])
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('segment_id').unsigned().nullable()
      table.integer('comment_segment_id').unsigned().nullable()

      table.dropColumn('parent_type')
      table.dropColumn('parent_id')

      table.string('author').notNullable().alter()
      table.string('source').notNullable().alter()
    })
  }
}
