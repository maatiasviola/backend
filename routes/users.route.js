const express = require('express')
const router = express.Router()
const UserController = require('../controllers/users.controller');

router.get('/test', function(req, res) {
    res.send('Llegaste a la ruta de users');
  });
router.post('/registration', UserController.createUser)
router.get('/', UserController.getUsers)
router.post('/userByMail', UserController.getUsersByMail)

/*
router.post('/login/', UserController.loginUser)
router.put('/', Authorization, UserController.updateUser)
router.delete('/:id', Authorization, UserController.removeUser)
router.post('/guardarImgUser',UserController.guardarImagenUser)
router.post('/uploadImg',UploadController.uploadFilesImgUser);
router.post('/imgUserByMail',Authorization,UserController.getImagenUserByMail)
router.post('/sendMail',MailController.sendEmail)
*/

module.exports = router;



