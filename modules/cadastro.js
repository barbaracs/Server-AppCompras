module.exports = {
  usuario: function(req, res) {
      var dados = {
        nome: req.body.nome,
        nomeusu: req.body.nomeusu,
        senha: req.body.senha,
        celular: req.body.celular
      }
      console.log(dados);
      //parte do bd
      res.json(dados);
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
