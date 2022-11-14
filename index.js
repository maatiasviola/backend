const express = require('express')
const usersRouter = require('./controllers/users')
const app = express()
const Clase = require("./models/Clase")

require('./mongo')

app.use(express.json())

app.use('/api/users',usersRouter)

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})


// Metodos usuarios


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
