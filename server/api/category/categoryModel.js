var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  categories: {
    name: String,
    unique: true
  }
});

module.exports = mongoose.model('user', UserSchema);
