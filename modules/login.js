var bd = require ('../models/usuario');

module.exports = function(req, res) {
  var dados = {
    nomeusu: req.params.nomeusu,
    senha: req.params.senha
  }
  console.log('login funciona');
  //parte do bd
  res.json(dados);
}
