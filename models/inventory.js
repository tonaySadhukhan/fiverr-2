const mongoose = require('mongoose');
const schema= new mongoose.Schema({
   
  customer: String,
  receiveDate: Date,
  carrier: String,
  container: String,
  seal: String,
  vessel: String,
  transaction: String,
  comment: String,
  items: [
    {
      item: String,      // e.g., Guatemala
      cargo: String,     // e.g., CA821460
      marks: String,     // e.g., 11-55648-0002 No hooks
      ref: String,
      container: String,
      ordered: Number,
      actual: Number,
      uom: String,       // e.g., BG
      weight: Number
    }
  ]
}

);
const Inventory = mongoose.model('Inventory', schema);

module.exports = Inventory;