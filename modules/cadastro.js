var Usuario = require('../models/usuario');
var NAnuncio = require('../models/novoanuncio');

module.exports = {
  usuario: function(req, res) {
      var newUsuario = new Usuario();
      newUsuario.nome        = req.body.dadosUsu.nome;
      newUsuario.nomeusu     = req.body.dadosUsu.nomeUsuario;
      newUsuario.senha       = req.body.dadosUsu.senha;
      newUsuario.celular     = req.body.dadosUsu.cel;

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
    //console.log(req);
      var newNAnuncio = new NAnuncio();
        newNAnuncio.titulo    = req.body.dadosNAnuncio.titulo;
        newNAnuncio.local     = req.body.dadosNAnuncio.local;
        newNAnuncio.preco     = req.body.dadosNAnuncio.preco;
        newNAnuncio.inicio    = req.body.dadosNAnuncio.horainicio;
        newNAnuncio.termino   = req.body.dadosNAnuncio.horatermino;
        newNAnuncio.descricao = req.body.dadosNAnuncio.descricao;
        newNAnuncio.tags      = req.body.dadosNAnuncio.tag;

      newNAnuncio.save(function(err, resultado) {
        if (err) {
          res.send('erro');
        } else {
          res.send(resultado);
        }
      });
    }
  }
