var Usuario = require('../models/usuario');
var NAnuncio = require('../models/novoanuncio');
var Tags = require('../models/tags');

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
  },
  anuncio: function(req, res){
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
    },
  tag: function(req, res) {
    var newTag = new Tags();
    console.log(req.body);
      newTag.tag = req.body.tag;

      newTag.save(function(err, resultado){
        if(err){
          res.send('erro');
        } else {
          res.send(resultado);
        }
      });
    },
    // getAllTags: function(req,res) {
    //   var allTags = undefined;
    //   Tags.find(function(err,tags) {
    //     if(err) return console.error(err);
    //     console.log(tags);
    //   })
    // }


}
