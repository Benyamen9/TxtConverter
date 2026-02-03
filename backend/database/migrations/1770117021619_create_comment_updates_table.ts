import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      // Vérifier et supprimer les anciennes colonnes si elles existent
      table.dropColumn('parent_type')
      table.dropColumn('parent_id')
    })

    // Dans un second temps, ajouter les nouvelles colonnes seulement si nécessaire
    const hasSegmentId = await this.schema.hasColumn(this.tableName, 'segment_id')
    const hasParentCommentId = await this.schema.hasColumn(this.tableName, 'parent_comment_id')

    this.schema.alterTable(this.tableName, (table) => {
      if (!hasSegmentId) {
        table
          .integer('segment_id')
          .unsigned()
          .nullable()
          .references('id')
          .inTable('segments')
          .onDelete('CASCADE')
      }
      if (!hasParentCommentId) {
        table
          .integer('parent_comment_id')
          .unsigned()
          .nullable()
          .references('id')
          .inTable('comments')
          .onDelete('CASCADE')
      }
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('segment_id')
      table.dropColumn('parent_comment_id')

      table.string('parent_type').notNullable()
      table.integer('parent_id').unsigned().notNullable()
    })
  }
}
