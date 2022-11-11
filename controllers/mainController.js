const controller = {
    index : (req, res) => {
        // const visitedProducts = products.filter(product => product.category == 'visited')
        // const inSaleProducts = products.filter(product => product.category == 'in-sale')
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
    productDetailMain : (req, res) => {
        return res.render('productDetailMain');
    },

    panel : (req, res) => {
        return res.render('panel');
    },
}
module.exports = controller;
