const Usuario = require('../models/Usuario.model')

_this = this;

exports.createUser = async function (req, res, next) {
    console.log("llegue al controller",req.body)
    const nuevoUsuario = new Usuario({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    avatar: req.body.avatar,
    email: req.body.email,
    password: req.body.password,
    })
    try {
    const createdUser = await nuevoUsuario.save();
    return res.status(201).json({createdUser, message: "Succesfully Created User"})
    } catch (e) {
    console.log(e)
    return res.status(400).json({status: 400, message: "User Creation was Unsuccesfull"})
    }
}

/*
exports.getUsers = async function (req, res, next) {

    const page = req.query.page ? req.query.page : 1
    const limit = req.query.limit ? req.query.limit : 10;
    try {
    const Users = await UserService.getUsers({}, page, limit)
    return res.status(200).json({status: 200, data: Users, message: "Succesfully Users Recieved"});
    } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getUsersByMail = async function (req, res, next) {

    const page = req.query.page ? req.query.page : 1
    const limit = req.query.limit ? req.query.limit : 10;
    let filtro= {email: req.body.email}
    try {
    const Users = await UserService.getUsers(filtro, page, limit)
    return res.status(200).json({status: 200, data: Users, message: "Succesfully Users Recieved"});
    } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
    }
}

exports.updateUser = async function (req, res, next) {

    // Id is necessary for the update
    if (!req.body.name) {
    return res.status(400).json({status: 400., message: "Name be present"})
    }


    const User = {

    name: req.body.name ? req.body.name : null,
    email: req.body.email ? req.body.email : null,
    password: req.body.password ? req.body.password : null
    }
    try {
    const updatedUser = await UserService.updateUser(User)
    return res.status(200).json({status: 200, data: updatedUser, message: "Succesfully Updated User"})
    } catch (e) {
    return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeUser = async function (req, res, next) {

    const id = req.params.id;
    try {
    const deleted = await UserService.deleteUser(id);
    res.status(200).send("Succesfully Deleted... ");
    } catch (e) {
    return res.status(400).json({status: 400, message: e.message})
    }
}


exports.loginUser = async function (req, res) {
    console.log("body",req.body)
    const User = {
    email: req.body.email,
    password: req.body.password
    }
    try {
    const loginUser = await UserService.loginUser(User);
    if (loginUser===0)
    return res.status(400).json({message: "Error en la contraseña"})
    else
    return res.status(201).json({loginUser, message: "Succesfully login"})
    } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: "Invalid username or password"})
    }
}
*/