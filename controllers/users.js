const usersRouter = require('express').Router()
const Usuario = require('../models/Usuario')

usersRouter.get('/', (request, response) => {
    Usuario.find({}).then(usuarios=>response.json(usuarios))
})
  
usersRouter.get('/:id', (request, response) => {
    //request.params devuelve un objeto con los valores dinamicos de la ruta
    const id = request.params.id //Accede a los valores dinamicos de la ruta
    Usuario.findById(id).then(usuario =>{
        if(usuario){
            response.json(usuario)
        }else{
            response.status(404).end()
        }
    })
})
  
usersRouter.post('/',(request,response)=>{
    const body = request.body
    
    const nuevoUsuario = new Usuario({
      nombre: body.nombre,
      apellido: body.apellido,
      clase:body.clase
    })
    
    nuevoUsuario.save()
        .then(usuario => {
            console.log('usuario saved!')
            response.json(usuario)
        })
  })
  

module.exports=usersRouter
