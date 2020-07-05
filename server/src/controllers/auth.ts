import {User} from '../models/user'

export const login = async (req, res) => {
  const {email, password} = req.body
  try {
    const user = await User.findUserByCredentials(email, password)
    res.sendStatus(200)
  } catch (e) {
    res.sendStatus(403)
  }
}

export const logout = (req, res) => {
  res.send({})
}
