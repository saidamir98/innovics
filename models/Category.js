const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String
  }
});

module.exports = Category = mongoose.model('Categories', CategorySchema);
