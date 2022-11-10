const {Schema, model} = require("mongoose")

const estudianteSchema = new Schema({
    usuario:{
      type:Schema.Types.ObjectId,
      ref:'Usuario'
    }
})

estudianteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Estudiante = model("Estudiante", estudianteSchema)

module.exports = Estudiante