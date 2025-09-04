const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  date: { type: Date, required: true },          // Date received
  item: { type: String, required: true },        // Coffee type or item
  cargo: { type: String },                       // Cargo ID
  marks: { type: String },                       // Marks/labels
  orderedQty: { type: Number, required: true },  // Ordered quantity
  orderedBy: { type: String },                   // Who placed the order
  inHand: { type: Number, required: true }       // Available stock
}, { timestamps: true });

const Inventory = mongoose.model('Inventory', schema);

module.exports = Inventory;
