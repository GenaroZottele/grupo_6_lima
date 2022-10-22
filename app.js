const express = require('express');
const app = express();

const path = require('path');
const publicFolderPath = path.resolve('public');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static(publicFolderPath));

const APP_PORT = 3000;
app.listen(APP_PORT, () => {
    console.log('Servidor funcionando en puerto ' + APP_PORT)
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve("views/index.html"))
})
app.get("/register", (req, res) => {
    res.sendFile(path.resolve("views/register.html"))
})
app.get("/login", (req, res) => {
    res.sendFile(path.resolve("views/login.html"))
})
app.get("/product", (req, res) => {
    res.sendFile(path.resolve("views/productDetail.html"))
})
app.get("/productcart", (req, res) => {
    res.sendFile(path.resolve("views/productCart.html"))
})
app.post("/", (req, res) => {
    return res.send(req.body)
})
