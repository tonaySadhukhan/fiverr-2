const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file
const mongourl=process.env.mongourl;

mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {   
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
});
module.exports = mongoose;
