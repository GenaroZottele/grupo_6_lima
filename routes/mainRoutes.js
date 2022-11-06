const express = require('express');
const router = express.Router();
const multer = require('multer');
const path  = require('path');

const mainController = require('../controllers/mainController');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname, '../public/images/userimages'))
         },
    filename:  (req, file, cb)=>{
        const newFileName = 'user-' + Date.now() +  path.extname(file.originalname);
        cb(null, newFileName)
    }
    });

const upload= multer ({storage});


router.get('/', mainController.index);

router.get('/register', mainController.register);

router.post('/register', upload.single('user-image'), mainController.register);

router.get('/login', mainController.login);

router.get('/productCart', mainController.productCart);

router.get('/productDetail', mainController.productDetail);

router.get('/contacto', mainController.contacto);

router.get('/nosotros', mainController.nosotros);

router.get('/productDetailMain', mainController.productDetailMain)

router.get('/panel', mainController.panel);


module.exports = router;
