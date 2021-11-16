import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User';
export default class SignUpController {
  public async index({ request, response }: HttpContextContract) {
    const req = await request.validate({
      schema: schema.create({
        name: schema.string(),
        email: schema.string({}, [rules.email()]),
        username: schema.string({}),
        password: schema.string({}),
      }),
      messages: {
        "name.required": "Name is required to sign up",
        "email.required": "Email is required to sign up",
        "username.required": "Username is required to sign up",
        "password.required": "Password is required to sign up",
      },
    });

    const user = new User()
    user.name = req.name
    user.email = req.email
    user.password = req.password
    await user.save()
    return response.redirect('/')

  }

  public async create({ }: HttpContextContract) { }

  public async store({ }: HttpContextContract) { }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
