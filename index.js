const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const db=require('./db');

app.use(cors());
app.use(bodyParser.json());

// --- Inventory API ---
const Inventory = require('./models/inventory');
app.get('/inventories', async (req, res) => {
  try {
    const inventories = await Inventory.find();
    res.json(inventories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/inventories', async (req, res) => {
  try {
    const inventory = new Inventory(req.body);
    await inventory.save();
    res.status(201).json(inventory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.put('/inventories/:id', async (req, res) => {
  try {
    const updated = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.delete('/inventories/:id', async (req, res) => {
  try {
    const deleted = await Inventory.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// --- Customer API ---
const Consumer = require('./models/customer');
app.get('/customers', async (req, res) => {
  try {
    const customers = await Consumer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/customers', async (req, res) => {
  try {
    const customer = new Consumer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.put('/customers/:id', async (req, res) => {
  try {
    const updated = await Consumer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.delete('/customers/:id', async (req, res) => {
  try {
    const deleted = await Consumer.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// --- Invoice API ---
const Invoice = require('./models/invoice');
app.get('/invoices', async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/invoices', async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.status(201).json(invoice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.put('/invoices/:id', async (req, res) => {
  try {
    const updated = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.delete('/invoices/:id', async (req, res) => {
  try {
    const deleted = await Invoice.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// --- Root route ---
app.get('/',(req,res)=>{
    res.send('Hello World!');
});

// --- Export server starter for Electron ---


// module.exports = app;

app.listen(process.env.port,()=>{
    console.log('Server is running on http://localhost:3000');

});

