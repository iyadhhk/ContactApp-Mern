const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creatte Schema
const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = Contact = mongoose.model('contact', ContactSchema);
