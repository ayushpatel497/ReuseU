const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  id: {
    type: String,
  
    index: true,
    unique: true
  },
  itemName: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Lost', 'Found'],
    required: true
  },
  description: {
    type: String,
    required: true
  }
});


const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
