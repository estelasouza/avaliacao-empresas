'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Empresa extends Model {
    avaliacao (){
        return this.hasMany('App/Models/Avaliacao')
    }
}

module.exports = Empresa
