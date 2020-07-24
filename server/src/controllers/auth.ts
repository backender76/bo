import {User} from '../models/user'
import * as jwt from 'jsonwebtoken'

const {JWT_SECRET} = process.env

export const login = async (req, res) => {
  const {email, password} = req.body
  try {
    const user = await User.findUserByCredentials(email, password)
    const token = jwt.sign({_id: user._id}, JWT_SECRET, {expiresIn: '7d'})
    res.cookie('token', token)
    res.sendStatus(200)
  } catch (e) {
    res.sendStatus(403)
  }
}

export const logout = (req, res) => {
  res.send({})
}
