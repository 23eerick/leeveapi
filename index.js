import express from 'express'

const app = express()
app.use(express.json())

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Inicio da aplicação')
})

app.listen(port, () => {
  console.log(`API Rest for leeve front started at ${port} 🚀`)
});


