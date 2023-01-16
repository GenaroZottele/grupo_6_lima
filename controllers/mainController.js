const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve('./data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 

const controller = {
    index : (req, res)=>{
        const masVendidos = products.filter(product => product.status == 'MasVendido')
        return res.render('index', {masVendidos})
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
