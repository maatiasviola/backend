const teachersRouter = require('express').Router()
const Profesor = require('../models/Profesor')

teachersRouter.get('/', (request, response) => {
    Profesor.find({}).then(profesores=>response.json(profesores))
})
  
teachersRouter.get('/:id', (request, response) => {
    const id = request.params.id
    Profesor.findById(id).then(profesor =>{
        if(profesor){
            response.json(profesor)
        }else{
            response.status(404).end()
        }
    })
})
  
teachersRouter.post('/',(request,response)=>{
    const body = request.body
    
    const nuevoProfesor = new Profesor({
      usuario: body.usuario,
      titulo: body.titulo,
      experiencia: body.experiencia
    })
    
    nuevoProfesor.save()
        .then(profesor => {
            console.log('profesor saved!')
            response.json(profesor)
        })
  })
  

module.exports=teachersRouter
