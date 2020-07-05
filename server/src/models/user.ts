import {Schema, Document, Model, model} from 'mongoose'
import * as bcrypt from 'bcrypt'
import * as uniqueValidator from 'mongoose-unique-validator'

export interface IUser extends Document {
  email: string
  username: string
  password: string
  created_at: Date
  updated_at: Date
}

export interface IUserModel extends Model<IUser> {
  findUserByCredentials(email: string, password: string): IUser
}

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
})

userSchema.plugin(uniqueValidator)

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({email})
    .select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('USER_NOT_FOUND'))
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return Promise.reject(new Error('USER_NOT_FOUND'))
        }
        return user
      })
    })
}

export const User: IUserModel = model<IUser, IUserModel>('user', userSchema)
