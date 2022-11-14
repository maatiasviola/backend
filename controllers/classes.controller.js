const classesRouter = require('express').Router()
const Clase = require('../models/Clase')

classesRouter.get('/api/clases', (request, response) => {
    const clases = Clase.find({}).then(clases=>response.json(clases))
})
  
classesRouter.get('/api/clases/:id', (request, response) => {
    const id = request.params.id
    Clase.findById({id}).then(clase => response.json(clase))
})
  
classesRouter.post('/api/clases',(request,response)=>{
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

module.exports=classesRouter