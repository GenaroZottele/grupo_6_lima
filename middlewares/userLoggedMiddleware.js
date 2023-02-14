const db = require('../src/database/models/index');

function userLoggedMiddleware(req, res, next) {
   res.locals.isLogged = false;

   if (req.session.userLogged) {
      res.locals.isLogged = true;
      res.locals.userLogged = req.session.userLogged;
   }

   let emailInCookie = req.cookies.userEmail;

   const userFromCookie = async () => {
      try {
         const user = await db.User.findAll({
            where: {
               email: emailInCookie,
            },
         });
         req.session.userLogged = user[0].dataValues;
         res.locals.isLogged = true;
         res.locals.userLogged = req.session.userLogged;
      } catch (error) {
         console.log('error');
      }
   };

   if (emailInCookie) {
      userFromCookie();
   }

   next();
}

module.exports = userLoggedMiddleware;
