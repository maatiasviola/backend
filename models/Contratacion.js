const {Schema, model} = require("mongoose")

const contratacionSchema = new Schema({
    clase:{
      type:Schema.Types.ObjectId,
      ref:'Clase'
    },
    email: String,
    nroTelefono: Integer,
    motivo: String,
    estado: String,
})

contratacionSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Contratacion = model("Contratacion", contratacionSchema)

module.exports = Contratacion