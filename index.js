const express = require('express')
const app = express()

require('./mongo')

app.use(express.json())

let clases = [
  {
    id:1,
    nombre:"Clase Guitarra"
  },
  {
    id:2,
    nombre:"Clase Chef"
  },
  {
    id:3,
    nombre:"Clase Tenis"
  },
]

let usuarios=[
  {
      idUsuario:1,
      nombre:"profesor",
      apellido:"prueba"    },
  {
      idUsuario:2,
      nombre:"alumno",
      apellido:"prueba"
  },{
      idUsuario:3,
      nombre:"Pablo",
      apellido:"Perez"
  }]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/clases', (request, response) => {
  response.json(clases)
})

app.get('/api/clases/:id', (request, response) => {
  const id = Number(request.params.id)
  const clase = clases.find(clase=>clase.id=id)
  response.json(clase)
})

app.post('/api/clases',(request,response)=>{
  const body = request.body
  console.log(body);
  const newClase = {
    id:body.id,
    nombre:body.nombre
  }

  clases=clases.concat(newClase)

  response.json(newClase)
})

// Metodos usuarios

app.get('/api/users', (request, response) => {
  response.json(usuarios)
})

app.get('/api/users/:id', (request, response) => {
  const id = Number(request.params.id)
  const user = usuarios.find(user=>user.idUsuario==id)
  response.json(user)
})

app.post('/api/users',(request,response)=>{
  const body = request.body
  
  const newUser = {
    idUsuario:body.idUsuario,
    nombre:body.nombre,
    apellido:body.apellido
  }

  usuarios=usuarios.concat(newUser)

  response.json(newUser)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})