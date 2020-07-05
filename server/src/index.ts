import * as express from 'express'
import router from './routers/index'
import * as mongoose from 'mongoose'

const port: number = 3700
const mongoUrl: string = 'mongodb://localhost:27017/bo'

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('mongoose connected to', mongoUrl)
  })

const app = express()

app.use('/api', router)

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
