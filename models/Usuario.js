const {Schema, model} = require("mongoose")

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String
})

usuarioSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Usuario = model("Usuario", usuarioSchema)

/*const usuario = new Usuario({
    nombre: "Matias",
    apellido: "Viola"
})

usuario.save()
.then(result => {
    console.log('usuario saved!')
    mongoose.connection.close()
  })*/

  module.exports = Usuario