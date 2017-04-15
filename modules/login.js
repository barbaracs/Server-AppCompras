var Usuario = require('../models/usuario');
var mongoose = require('../connection')

module.exports = {
  test: function(req, res) {
    Usuario.find({})
      .exec(function(err, usuario) {
        if (err) {
          res.send('erro')
        } else {
            var ok = 0;
            var login = req.body.dadosLogin.usu;
            var senha = req.body.dadosLogin.senha;

            for(var i=0; i<usuario.length; i++){
              var info=usuario[i];
              if(!(login.localeCompare(info.nomeusu)))
                if(!(senha.localeCompare(info.senha)))
                  ok = 1;;
            }

          res.json(ok);
        }
      });
  },
}
