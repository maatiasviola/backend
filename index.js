const express = require('express')
const app = express()
const Clase = require("./models/Clase")
const Usuario = require('./models/Usuario')

require('./mongo')

app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/clases', (request, response) => {
  const clases = Clase.find({}).then(clases=>response.json(clases))
})

app.get('/api/clases/:id', (request, response) => {
  const id = request.params.id //Accede a los valores dinamicos de la ruta
  Clase.findById({id}).then(clase => response.json(clase))
})

app.post('/api/clases',(request,response)=>{
  const body = request.body
  const clase = new Clase({
    nombre: body.nombre
  })
  clase.save()
  .then(result => {
    console.log('clase saved!')
    mongoose.connection.close()
  })
  response.json()
})

// Metodos usuarios

app.get('/api/users', (request, response) => {
  const usuarios = Usuario.find({}).then(usuarios=>response.json(usuarios))
})

app.get('/api/users/:id', (request, response) => {
  const id = request.params.id //Accede a los valores dinamicos de la ruta
  Usuario.findById({id}).then(usuario => response.json(usuario))
})

app.post('/api/users',(request,response)=>{
  const body = request.body
  const usuario = new Usuario({
    nombre: body.nombre,
    apellido: body.apellido
  })
  usuario.save()
  .then(result => {
    console.log('usuario saved!')
    mongoose.connection.close()
  })
  response.json()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
