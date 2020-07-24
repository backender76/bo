import * as dotenv from 'dotenv'
import * as express from 'express'
import * as mongoose from 'mongoose'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

import router from './routers/index'

const PORT: number = Number(process.env.API_PORT)
const MONGO_URL: string = process.env.DB_URL

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('mongoose connected to', MONGO_URL)
  })

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
