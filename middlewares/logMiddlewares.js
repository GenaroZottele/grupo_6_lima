const fs = require('fs');
function logMiddleware(req, res, next){
    fs.writeFileSync('log.txt', 'Se ingresó en la página '+ req.url);
    next();
}

module.exports = logMiddleware;