const mongoose = require('mongoose');
const schema = mongoose.Schema;
const invoiceSchema = new schema({
    issueDate: { type: Date, default: Date.now },
    customer: { type: String, required: true },
    paymentDate: { type: Date },
    items_quantity: { type: String, required: true },
    price: { type: String, required: true },
    subtotal: { type: String, required: true },
    fee: { type: String, required: true },
    totalDue: { type: String, required: true },
    invoice: { type: String, required: true },
});
const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;