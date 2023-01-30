const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require ('../src/database/models/index');

const controller = {

	register: (req, res) => {
		return res.render('register');
	},	
    
	processRegister: (req, res) => {
		/* const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

    //Verifico si el usuario existe buscando por su email   

		let userInDB = db.User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		} */
 
		let userToCreate = {
			full_name: req.body.full_name,
			email: req.body.email,
			password: bcryptjs.hashSync(req.body.password, 10),			
			phone: req.body.phone,
			adress_id: req.body.adress_id,
			user_type_id: req.body.user_type_id,
			avatar: req.file.filename,						
		}

		db.User.create(userToCreate);
			return res.redirect('/users/login');
	},

	login: (req, res) => {
		return res.render('login');
	},

	loginProcess: (req, res) => {		
		db.User.findAll()		  
		   .then(function(users){
			let enteredMail = req.body.email;
			for (let i=0; i < users.length; i++) {
			    if (enteredMail == users[i].dataValues.email) {				
				    let selectedUser = users[i];
					let enteredPassword = bcryptjs.compareSync(req.body.password, users[i].password);
					if (enteredPassword){
						req.session.userLogged = users[i];

						/* if(req.body.recordar) {
							res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
						} */

						return res.render('userProfile', {user: selectedUser});
					} else {
						return res.render('login', {
							errors:{password: {msg: 'La contraseña es incorrecta'}}							
						});						
					}				        				    
			    }
			};
			return res.render('register', {
				errors:{email: {msg: 'El email ' + enteredMail + ' no está registrado'}}			
		    });			
		});		
	},		
    
	profile: (req, res) => {
		return res.render('userProfile', {
			user: req.session.userLogged
		});
	},	

	userDetail: (req, res) =>{		
			return res.render('userDetail', {
				user: req.session.userLogged
			});		  
	},

	edit: (req, res) => {
		let usuario = db.Usuario.email.findAll();
		Promise.all([usuario])
		  .then(function([Usuario]) {
			return res.render('edit', {Usuario:Usuario});
		})
	},	

	delete: (req, res) => {
		db.User.destroy({
		  where: {
			id: req.session.userLogged
		  }
		})
		res.redirect('/');
	},	
	
	logout: (req, res) => {

		/* res.clearCookie('userEmail'); */
		
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = controller;