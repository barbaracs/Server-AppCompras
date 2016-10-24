var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var novoAnuncioSchema = new Schema({
  titulo:    String,
  local:     String,
  preco:     Number,
  inicio:    String,
  termino:   String,
  descricao: String,
  tags:      Array,
  publicado: {
              type:    Date,
              default: Date.now
              }
});

var novoanuncio = mongoose.model('novoanuncio', novoAnuncioSchema);

module.exports = novoanuncio;
