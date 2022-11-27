const express = require('express');
const router = express.Router();

// Controller
const usersController = require('../controllers/userController');

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');


// Formulario de registro
router.get('/register', usersController.register);

// Procesar el registro
router.post('/', uploadFile.single("avatar"), validations, usersController.processRegister);

// Formulario de login
router.get('/login', usersController.login);

// Procesar el login
router.post('/login', usersController.loginProcess);

// Perfil de Usuario
router.get('/profile/', usersController.profile);

// Logout
router.get('/logout/', usersController.logout);

module.exports = router;