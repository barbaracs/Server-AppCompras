var express = require('express'),
  router = express.Router();    //requisição do roteamento

var login = require('../modules/login');

router.post('/test', login.test);

module.exports = router;
