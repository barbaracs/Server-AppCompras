var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var salvaTagSchema = new Schema({
  tag: String
});

var salvatag = mongoose.model('tag', salvaTagSchema);

module.exports = salvatag;
