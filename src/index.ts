import * as express from 'express'
import router from './routers/index'

const port: number = 3700

const app = express()

app.use('/api', router)

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
