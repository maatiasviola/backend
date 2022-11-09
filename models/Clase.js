const {Schema, model} = require("mongoose")

const claseSchema = new Schema({
    nombre: String,
    user:{
      type:Schema.Types.ObjectId,
      ref:'Usuario'
    }
})

claseSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Clase = model("Clase", claseSchema)

  module.exports = Clase