import * as jwt from 'jsonwebtoken'

const {JWT_SECRET} = process.env

if (process.env.NODE_ENV === 'production' && JWT_SECRET === 'super-strong-secret') {
  console.error('Do not use default JWT_SECRET!!!')
  process.exit(1)
}

export const auth = (req, res, next) => {
  const token = req.cookies.token

  if (token) {
    try {
      req.user = jwt.verify(token, JWT_SECRET)
      return next()
    } catch (e) {}
  }
  return res.sendStatus(403)
}
