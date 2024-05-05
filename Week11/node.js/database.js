const mongoose = require('mongoose');
//const { deleteOne } = require('./models/product');
const mongoURI = ""


// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Miirah22'
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  
module.exports = mongoose



