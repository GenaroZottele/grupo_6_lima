<<<<<<< HEAD
const User = require('../src/database/models');
=======
const User = require('../src/database/models/User');
>>>>>>> c79ec0702fd22d9a035436c0ca2a85d6c87aa607

function userLoggedMiddleware (req, res, next) {
    
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailInCookie);

    if(userFromCookie) {
        req.session.userLogged = userFromCookie;
    }

    if(req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLoggedMiddleware;