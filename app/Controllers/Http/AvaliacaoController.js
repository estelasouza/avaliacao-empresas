'use strict'
const Avaliacao = use('App/Models/Avaliacao')
const Empresa = use('App/Models/Empresa')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with avaliacaos
 */
class AvaliacaoController {
  /**
   * Show a list of all avaliacaos.
   * GET avaliacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const avalicoes = Avaliacao.all()
    // await avalicoes.load('avaliacao')
    return avalicoes
  }


  /**
   * Create/save a new avaliacao.
   * POST avaliacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const data= request.only([
      
      'cargo',
      'salario',
      'ambiente_trabalho',
      'data'
    ])
    console.log( data)
    const avaliacao = Avaliacao.create(data)
    print('crou')
    await avaliacao.load('empresa')
    return avaliacao
  }

  /**
   * Display a single avaliacao.
   * GET avaliacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const avaliacao = await Avaliacao.findOrFail(params.id)
    return avaliacao
  }


  /**
   * Update avaliacao details.
   * PUT or PATCH avaliacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a avaliacao with id.
   * DELETE avaliacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const avaliacao = await Avaliacao.findOrFail(params.id)
    await avaliacao.delete()
  }
}

module.exports = AvaliacaoController
