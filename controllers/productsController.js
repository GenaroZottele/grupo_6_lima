const { fileLoader } = require('ejs');
const fs = require('fs');
const path = require('path');
const upload = require('../middlewares/multerMiddlewareProducts'); 
const db = require('../src/database/models/index');

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
      db.Product.create({
        name: req.body.name,
        description: req.body.description,
        image: req.file.filename,
        status: req.body.status,
        price: req.body.price,
        discount: req.body.discount
      });
      console.log(req.file.filename)
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
      db.Product.update({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
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
    }}

    module.exports = controller;