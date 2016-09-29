var express = require('express'),
  router = express.Router();    //requisição do roteamento

var login  = require ('../modules/login');

router.get('/:nomeusu/:senha', login);

module.exports = router;
