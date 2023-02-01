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
        let oldData = req.body;        
        return res.render('create', {oldData: oldData});
    },

    save: function (req, res){            
      const resultValidation = validationResult(req);      
      if (resultValidation.errors.length > 0) {
        return res.render('create', {
          oldData: req.body,
          errors: resultValidation.mapped(),
        })
      };      
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
        return res.render('edit', {product: product});
      })
    },
  
    update: (req, res) => { 
      // incorporar olData y que los cambios en el edit no se pisen por el producto original, en caso de que las validaciones den error  
      const resultValidation = validationResult(req);      
      if (resultValidation.errors.length > 0) {
        db.Product.findByPk(req.params.id)      
        .then(function(product) {  
          return res.render('edit', {
            product: product,
            errors: resultValidation.mapped()          
          })       
        })        
      } else {
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
      }    
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