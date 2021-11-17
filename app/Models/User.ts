import Env from '@ioc:Adonis/Core/Env';
import { DateTime } from 'luxon'
import { BaseModel, column, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import Mail from '@ioc:Adonis/Addons/Mail'
import {nanoid} from 'nanoid'
export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  public async sendVerificationEmail() {
    const token = nanoid()
    const url = `${Env.get('APP_URL')}/confirm-email/${this.id}/${token}`
    Mail.send((message) => {
      message.from('verify@adonis.com').to(this.email).subject('Please verify your email').htmlView('emails/verify', { user: this, url })
    })
  }

}
