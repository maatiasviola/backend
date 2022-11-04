const mongoose = require('mongoose')
const connectionString = `mongodb+srv://matias:matigonza@cluster0.wrjdamk.mongodb.net/TusClases?retryWrites=true&w=majority`

mongoose.connect(connectionString)
.then(()=>console.log('database connected'))
.catch(err=>console.log(err))