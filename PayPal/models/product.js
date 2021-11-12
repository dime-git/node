const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  stock: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: 'category'
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  
}, { timestamps: true });

module.exports = mongoose.model('product', productSchema)
