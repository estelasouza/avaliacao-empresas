'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpresaSchema extends Schema {
  up () {
    this.create('empresas', (table) => {
      table.increments()
      table.string('nome_empresa').notNullable()
      table.string('cod_empresa').notNullable()
      table.string('bairro_empresa').notNullable()
      table.string('situação_empresa').notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('empresas')
  }
}

module.exports = EmpresaSchema
