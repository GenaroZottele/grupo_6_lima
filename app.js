const express = require('express');
const path = require('path');

const app = express();

const publicFolderPath = path.resolve('public');
app.use(express.static(publicFolderPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const APP_PORT = 3000;
app.listen(APP_PORT, () => {
    console.log('Servidor funcionando en puerto ' + APP_PORT)
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/index.html'))
});

app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve('./views/register.html'))
});

app.get("/login.html", (req, res) => {
    res.sendFile(path.resolve("./views/login.html"))
});

app.get("/productDetail.html", (req, res) => {
    res.sendFile(path.resolve("./views/productDetail.html"))
});

app.get("/productcart.html", (req, res) => {
    res.sendFile(path.resolve("./views/productCart.html"))
});

app.post("/", (req, res) => {
    return res.send(req.body)
})