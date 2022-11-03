const controller = {
    index : (req, res) => {
        return res.render('index');
    },
    register : (req, res) => {
        return res.render('register');
    },
    login : (req, res) => {
        return res.render('login');
    },
    productCart : (req, res) => {
        return res.render('productCart');
    },
    productDetail : (req, res) => {
        return res.render('productDetail');
    },
    contacto : (req, res) => {
        return res.render('contacto');
    },
    nosotros : (req, res) => {
        return res.render('nosotros');
    },
    panel : (req, res) => {
        return res.render('panel');
    },
}
module.exports = controller;
