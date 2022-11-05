const {Schema, model} = require("mongoose")

const claseSchema = new Schema({
    nombre: String
})

claseSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Clase = model("Clase", claseSchema)

/*const clase = new Clase({
    nombre: "Clase de danza"
})

clase.save()
.then(result => {
    console.log('clase saved!')
    mongoose.connection.close()
  })*/

  module.exports = Clase