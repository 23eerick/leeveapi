import dot from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
dot.config().parsed

const db = process.env.DATABASE
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Inicio da aplicação')
})

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