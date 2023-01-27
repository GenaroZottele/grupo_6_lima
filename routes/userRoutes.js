const express = require('express');
const router = express.Router();

// Controller
const usersController = require('../controllers/userController');

// Middlewares
const uploadFile = require('../middlewares/multerMiddlewareUsers');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// Formulario de registro
router.get('/register', guestMiddleware, usersController.register);

// Procesar el registro
router.post('/register', uploadFile.single("avatar"), validations, usersController.processRegister);

// Formulario de login
router.get('/login', guestMiddleware, usersController.login);

// Procesar el login
router.post('/login', usersController.loginProcess);

// Perfil de Usuario
router.get('/profile', authMiddleware, usersController.profile);

router.post('/profile', authMiddleware, usersController.profile);

router.get('/edit', usersController.edit)

router.get('/userDdetail', usersController.detail)

// Logout
router.get('/logout', usersController.logout);

module.exports = router;