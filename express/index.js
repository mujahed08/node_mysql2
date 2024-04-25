import express from "express";
const app = express();
const PORT = 3000; // You can use any port you prefer

// Sample product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

// Endpoint to get product details by ID
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  // Find the product with the given ID
  const product = products.find((p) => p.id === productId);

  if (!product) {
    // If product not found, send 404 Not Found status
    return res.status(404).json({ error: "Product not found" });
  }

  // If product found, send the product details
  res.json(product);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
