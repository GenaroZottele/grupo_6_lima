const fs = require('fs');
const path = require('path');
const db = require('../src/database/models/index'); 

const controller = {
    index : (req, res)=>{        
        db.Product.findAll()
          .then(function(products){
            return res.render('index', {products: products});
          });      
    },
    register : (req, res) => {
        return res.render('register');
    },
    login : (req, res) => {
        return res.render('login');
    },
    profile : (req, res) => {
        return res.render('userProfile');
    },
    productCart : (req, res) => {
        return res.render('productCart');
    },
    productDetail : (req, res)=>{        
        db.Product.findAll()
          .then(function(products){
            return res.render('productDetail', {products: products});
          });
    },
    contacto : (req, res) => {
        return res.render('contacto');
    },
    nosotros : (req, res) => {
        return res.render('nosotros');
    },
    productDetailMain : (req, res) => {
        db.Product.findAll()
          .then(function(products){
            return res.render('productDetailMain', {products: products});
          });
    },
    create : (req, res) => {
        return res.render('create');
    },
    edit : (req,res) => {
        return res.render('edit');
    },
    userDetail: (req,res) => {
        return res.render('userDetail');
}}
module.exports = controller;
