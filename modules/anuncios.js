var Anuncio = require('../models/novoanuncio');
var mongoose = require('../connection')

module.exports = {
  dia: function(req, res) {
    Anuncio.find({})
      .exec(function(err, anuncios) {
        if (err) {
          res.send('erro')
        } else {
          var anunciosDia = [];

          var d1 = new Date();
          d1.setHours(0,0,0,0);

          for (var i = 0; i < anuncios.length; i++) {
            var data = anuncios[i];
            var d2 = new Date(data.publicado);
            d2.setHours(0,0,0,0);
            var t = d1.valueOf() === d2.valueOf();
            if (t)
              anunciosDia.push(data);
          }

          res.json(anunciosDia);
        }
      });
  },
  todos: function(req, res) {
    Anuncio.find({})
      .exec(function(err, anuncios) {
        if (err) {
          res.send('erro')
        } else {
          res.json(anuncios);
        }
      });
  }
}
