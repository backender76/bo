import {Router} from 'express'
import {authRouter} from './auth'

const router = Router()

router.get('/', (req, res) => {
  res.send({foo: 'bar'})
})

router.use('/auth', authRouter)

export default router
