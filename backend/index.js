const express = require('express');
const mongoose = require('mongoose');
const Product = require('./Models/product');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(cors({origin: true, credentials: true}));
mongoose.connect('mongodb://localhost:27017/shopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family:4
})
// Event handler for successful connection
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
  // Event handler for connection error
mongoose.connection.on('error', (error) => {
    console.error('Error connecting to MongoDB:', error);
  });


// Get all products
app.get('/products', (req, res) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      console.error('Error retrieving products:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

// Get a single product by ID
app.get('/products/:id', (req, res) => {
  const productId = req.params.id;

  Product.findById(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    })
    .catch((error) => {
      console.error('Error retrieving product:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
