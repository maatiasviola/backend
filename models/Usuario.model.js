const {Schema, model} = require("mongoose")

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    avatar: String,
    email: String,
    telofono: String,
    password: String,
    preguntaVerificacion: String,
    respuestaVerificacion: String,
    rol: String,
    clases:{
      type:Schema.Types.ObjectId,
      ref:'Clase'
    },
})

usuarioSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Usuario = model("Usuario", usuarioSchema)

module.exports = Usuario