var Usuario = require('../models/usuario');

module.exports = {
  usuario: function(req, res) {
      var newUsuario = new Usuario();
      newUsuario.nome        = req.body.dadosUsu.nome;
      newUsuario.nomeusu     = req.body.dadosUsu.nomeUsuario;
      newUsuario.senha       = req.body.dadosUsu.senha;
      newUsuario.celular     = req.body.dadosUsu.cel;

    console.log(newUsuario);

      newUsuario.save(function(err, resultado) {
        if (err) {
          res.send('erro');
        } else {
          res.send(resultado);
        }
      });

      //res.json(resultado);
  },
  anuncio: function(req, res){
      var dados = {
        titulo: req.body.titulo,
        local: req.body.local,
        preco: req.body.preco,
        inicio: req.body.inicio,
        termino: req.body.termino,
        descricao: req.body.descricao,
        tag: req.body.tag
      }
      console.log(dados);
      //parte do bd
      res.json(dados);
  }
}
