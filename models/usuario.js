var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
  nome:    String,
  nomeusu: String,
  senha:   String,
  celular: String
});

var usuario = mongoose.model('usuario', usuarioSchema);

module.exports = usuario;
