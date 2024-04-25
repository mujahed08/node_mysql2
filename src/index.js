// Import required modules
import express from 'express';
import { fetchProducts, insert_product } from './dbops/product.js';

// Create Express app
const app = express();
const PORT = 3000;


// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to fetch products
app.get('/products', async (req, res) => {
  const products = await fetchProducts()
  res.json(products);
});

app.post('/products', async (req, res) => {
    const product = req.body;
  const product_Id = await insert_product(product)
    res.status(201).json({ id: product_Id, ...product });
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
