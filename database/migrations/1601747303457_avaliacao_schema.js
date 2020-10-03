'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvaliacaoSchema extends Schema {
  up () {
    this.create('avaliacaos', (table) => {
      table.increments()
      table.integer('empresa_id').unsigned().references('empresa.id').notNullable()
      table.string('cargo').notNullable()
      table.integer('salario').notNullable()
      table.integer('ambiente_trabalho').notNullable()
      table.datetime('data')
      table.timestamps()
    })
  }

  down () {
    this.drop('avaliacaos')
  }
}

module.exports = AvaliacaoSchema
