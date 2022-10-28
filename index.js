const express = require('express')
const app = express()
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

//GET: obtener
//POST:enviar
// UPDATE DELETE

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
  
  const newClase = {
    id:body.id,
    nombre:body.nombre
  }

  clases=clases.concat(newClase)

  response.json(newClase)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})