import dot from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

import routes from './src/routes.js'

const app = express()
app.use(express.json())
app.use(routes)

dot.config().parsed

const db = process.env.DATABASE
const port = process.env.PORT

mongoose.set('strictQuery', true)

const initDatabase = async () => {
  await mongoose.connect(db)
    .then(() => {
      console.log('connected database')
    })
    .catch((err) => {
      console.log(`database not connected, ${err}`)
    })
}

app.listen(port, () => {
  console.log(`API Rest for leeve front started at ${port} 🚀`)
});


const initApp = async () => {
  await initDatabase()
}

initApp()