var express = require('express');
var mongoose = require('./connection')

var app = express(); //inicia as configs iniciais do servidor

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/////
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var rotas = {};
//ROTAS
rotas.cadastro  = require('./routes/cadastro');
rotas.login     = require('./routes/login');
rotas.anuncios  = require('./routes/anuncios');

app.use('/cadastro', rotas.cadastro);
app.use('/login', rotas.login);
app.use('/anuncios', rotas.anuncios);

app.listen(3000);
console.log("Servidor conectado na porta 3000");
