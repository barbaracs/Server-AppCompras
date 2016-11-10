//CONEXAO BANCO DE DADOS
 var mongoose = require ('mongoose');

 var db = mongoose.connection;

 db.on('error', console.error);
 db.once('open', function(){
   console.log("Conexao com bd feita com sucesso");
 });

 mongoose.connect('mongodb://localhost:27017/test');

/////
