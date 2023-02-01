const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require ('../src/database/models/index');

const controller = {

	register: (req, res) => {
		let user = req.body;
		return res.render('register', {user: user});
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
		let user = req.body;    
        const resultValidation = validationResult(req);      
            if (resultValidation.errors.length > 0) {
                return res.render('register', {
                    user: user,
                    errors: resultValidation.mapped(),
                })
        };
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
		db.User.findByPk(req.session.userLogged.id)		  
		  .then(function(user){			
			return res.render('userEdit', {user: user});
		  })		
	},     

	update: (req, res) => {
		db.User.update({
			full_name: req.body.full_name,
            adress_id: req.body.adress_id,
            avatar: req.file.filename,
            phone: req.body.phone,
            email: req.body.email,            
		}, {
			where: {
				id: req.session.userLogged.id
			}
		})
		// arreglar datos del usuario que trae el update o hacer un findByPk y despues el update y passar los cambios al session
		.then(function(user){	
			console.log(user);		
			return res.render('userDetail', {user: req.session.userLogged});
		});				
	},	

	delete: (req, res) => {		
		db.User.destroy({
		  where: {
			id: req.session.userLogged.id
		  }
		})
		res.redirect('/');
	},	
	
    // Hacer funcionar logout

	logout: (req, res) => {

		/* res.clearCookie('userEmail'); */

		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = controller;