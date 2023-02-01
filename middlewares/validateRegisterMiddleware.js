const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('full_name').notEmpty().withMessage('Tienes que escribir un nombre')
		.isLength({ min: 2 }),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),		

		/* .custom(async email => {
            const value = await isEmailInUse(email);
            if (value) {
                throw new Error('El mail ya existe');
            }
            }) */

	body('password')
		.notEmpty().withMessage('Tienes que escribir una contraseña')
		.isLength({ min: 8 }),
	body('phone')
		.notEmpty().withMessage('Tienes que escribir un telefono'),
	body('adress_id')
		.notEmpty().withMessage('Tienes que escribir una dirección'),
	body('user_type_id')
		.notEmpty().withMessage('Tienes que escribir un tipo de usuario'),			
	body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif']; 
 
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		} 
 
		return true;
	}),
	
 ]
 
 