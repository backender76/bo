import {Router} from 'express'
import {login, logout} from '../controllers/auth'

const authRouter = Router()

authRouter.post('/login', login)
authRouter.post('/logout', logout)

export {authRouter}
