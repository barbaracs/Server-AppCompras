var express = require('express');

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


//CONEXAO BANCO DE DADOS
// var mongoose = require ('mongoose');
//
// var db = mongoose.connection;
//
// db.on('error', console.error);
// db.once('open', function(){
//   console.log("Conexao com bd feita com sucesso");
// });
//
// mongoose.connect('mongodb://localhost:27017/test');

/////


var rotas = {};
//ROTAS
rotas.cadastro = require('./routes/cadastro');
rotas.login = require('./routes/login');

app.use('/cadastro', rotas.cadastro);
app.use('/login', rotas.login);

app.listen(3000);
console.log("Servidor conectado na porta 3000");
