import {Router} from 'express'
import {authRouter} from './auth'
import {auth} from '../middlewares/auth'

const router = Router()

router.use('/auth', authRouter)

router.use(auth)

router.get('/', (req, res) => {
  res.send({foo: 'bar'})
})

export default router
