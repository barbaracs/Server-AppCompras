var express = require('express'),
  router = express.Router();    //requisição do roteamento

//chama as funções de buscar os anuncios
var anuncios = require('../modules/anuncios');

//pega os anuncios do dia
router.get('/dia', anuncios.dia);

//pega todos os anuncios ja feitos
router.get('/todos', anuncios.todos);

module.exports = router;
