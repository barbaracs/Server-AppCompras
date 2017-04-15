var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loginSchema = new Schema({
  usu: String,
  senha: String,
});

var login = mongoose.model('login', loginSchema);

module.exports = login;
