import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.enum('type', ['translator_note', 'saint_commentary', 'citation']).alter()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('type').alter()
    })
  }
}
