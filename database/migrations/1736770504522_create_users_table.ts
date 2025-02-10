import { BaseSchema } from '@adonisjs/lucid/schema'
import { UserRole } from '#models/user'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('name').notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.enum('role', Object.values(UserRole)).notNullable().defaultTo(UserRole.USER)
      table.integer('referred_by').unsigned().references('id').inTable('users').onDelete('CASCADE').nullable()

      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
