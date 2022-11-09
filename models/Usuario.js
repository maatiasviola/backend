const {Schema, model} = require("mongoose")

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    clase:{
      type:Schema.Types.ObjectId,
      ref:'Clase'
    }
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