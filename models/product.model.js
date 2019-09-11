const mongoose = require('mongoose')

const Schema = mongoose.Schema
const productSchema = new Schema({
  title: { type: String, required: true, unique: true, trim: true, minlength: 3 },
  price: { type: Number, required: true },
  brand: { type: String, required: true, trim: true },
  info: { type: String, trim: true },
  inCart: { type: Boolean, default: false },
  count: { type: Number, default: 0 },
  total: { type: Number, default: 0 }
}, {
  timestamps: true,
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product