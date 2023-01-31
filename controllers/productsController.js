const db = require('../src/database/models/index');
const { validationResult } = require('express-validator');

const controller = {  

    products: (req, res)=>{        
    db.Product.findAll()
      .then(function(products){
        return res.render('productCard', {products: products});
      });
    },

    create: function (req, res) {        
        return res.render('create');
    },

    save: function (req, res){
      const resultValidation = validationResult(req);
      
      if (resultValidation.errors.length > 0) {
        return res.render('create', {
          errors: resultValidation.mapped(),
        })
      }
      
      db.Product.create({
        name: req.body.name,
        description: req.body.description,
        image: req.file.filename,
        status: req.body.status,
        price: req.body.price,
        discount: req.body.discount
      });      
        res.redirect('/products')
    },
    
    detail: (req, res) =>{
      db.Product.findByPk(req.params.id)
        .then(function(product) {
          return res.render('productDetail', {product: product});
        })
      },    
    
    edit: (req, res) => {       
      db.Product.findByPk(req.params.id)      
        .then(function(product) {
        console.log(product);
        return res.render('edit', {product: product});
      })
    },
  
    update: (req, res) => {      
      db.Product.update({
        name: req.body.name,
        description: req.body.description,
        image: req.file.filename,
        status: req.body.status,
        price: req.body.price,
        discount: req.body.discount
      }, {
        where: {
          id: req.params.id
        } 
      });
        res.redirect('/products/productDetail/' + req.params.id)
    },

    delete: (req, res) => {
      db.Product.destroy({
        where: {
          id: req.params.id
        }
      })
      res.redirect('/products');
    }
    
}

module.exports = controller;