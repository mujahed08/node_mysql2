// Import required modules
import express from "express";
import { fetchProducts, insert_product } from "./dbops/product.js";
import cors from "cors";

// Create Express app
const app = express();
const PORT = 6002;

// Middleware to parse JSON requests
app.use(express.json());

const corsOptions = {
  origin: "*", //  * for all origin
  methods: ["GET", "POST", "PUT", "PATCH"], // Allow only specified HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow only specified headers
  exposedHeaders: ["Content-Length"], // Expose additional headers
  credentials: true, // Allow cookies to be sent with the request
  preflightContinue: false, // Disable preflight requests
  optionsSuccessStatus: 200, // Customize the success status for OPTIONS requests
};

// Enable CORS with the defined options
app.use(cors(corsOptions));

// Endpoint to fetch products
app.get("/products", async (req, res) => {
  const products = await fetchProducts();
  res.json(products);
});

app.post("/products", async (req, res) => {
  const product = req.body;
  product.apply_discount = true;
  const product_Id = await insert_product(product);
  res.status(201).json({ id: product_Id, ...product });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
