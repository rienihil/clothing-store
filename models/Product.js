const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  style: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: Number, default: 0 },
  size: { type: String, required: true },
  season: String,
  material: String,
  decoration: String,
  pattern_type: String,
  recommendation: { type: Number, default: 0 },
  fabric_type: String,
  neck_line: String,
  sleeve_length: String
});

module.exports = mongoose.model("Product", productSchema);