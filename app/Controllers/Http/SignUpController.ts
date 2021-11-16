import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SignUpController {
  public async index({ request }: HttpContextContract) {
    return request.all
  }

  public async create({ }: HttpContextContract) { }

  public async store({ }: HttpContextContract) { }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
