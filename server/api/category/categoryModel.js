var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  categories: {
    name: String,
    unique: true,
    required: true,
  }
});

module.exports = mongoose.model('category', UserSchema);
