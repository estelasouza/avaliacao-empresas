'use strict'

const Empresa = use('App/Models/Empresa')
const Database = use('Database')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with empresas
 */
class EmpresaController {
  /**
   * Show a list of all empresas.
   * GET empresas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const empresas = Empresa.query().with('avaliacao').fetch()
    // await empresas.load('avaliacao')
    return empresas
  }

 

  /**
   * Create/save a new empresa.
   * POST empresas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'nome_empresa',
      'cod_empresa',
      'bairro_empresa',
      'situação_empresa'
    ])
    const empresa = await Empresa.create(data)
    return empresa
  }

  /**
   * Display a single empresa.
   * GET empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const empresa = await Empresa.query().where('id',params.id).with('avaliacao').fetch()
    // console.log(Empresa.query().with('avaliacao').fetch())
    // empresa = await empresa.query().with('avaliacao').fetch()
    // .findOrFail(params.empresa_id)
    return empresa
  }

  /**
   * Update empresa details.
   * PUT or PATCH empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const empresa = await Empresa.findOrFail(params.id)

    const data = request.only([
      'nome_empresa',
      'cod_empresa',
      'bairro_empresa',
      'situação_empresa'
    ])
    empresa.merge(data)
    await empresa.save()
    return empresa
  }

  /**
   * Delete a empresa with id.
   * DELETE empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const empresa = await Empresa.findOrFail(params.id)
    await empresa.delete()
  }
}

module.exports = EmpresaController
