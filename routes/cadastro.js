var express = require('express'),
  router = express.Router();    //requisição do roteamento

//chama as funções de cadastro (usuario)
var cadastro = require('../modules/cadastro');

//pega dados do cadastro de usuario
router.post('/usuario', cadastro.usuario);

//pega dados do cadastro do anuncio
router.post('/anuncio', cadastro.anuncio);

//pega dados do cadastro de tags
router.post('/tags', cadastro.tag);

// router.get('/allTags', cadastro.getAllTags);

module.exports = router;
