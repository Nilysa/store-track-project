import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import data from './data.js';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(cors());

app.use(express.json());

// Debugging middleware (logs all incoming requests)
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Corrected product route
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  console.log(" Backend received request for product ID:", productId);
  
  // Debug: Log all available IDs
  console.log(" Available product IDs:", data.products.map(p => p._id));

  const product = data.products.find(p => p._id.toString() === productId.toString());
  
  if (product) {
    console.log(" Found product:", product.name);
    res.json(product);
  } else {
    console.log(" Product not found!");
    res.status(404).json({ error: `Product ${productId} not found` });
  }
});

// Other routes (keep them below)
app.get("/api/products", (req, res) => {
  res.json(data.products);
});

app.get("/", (req, res) => {
  res.send("Server is running. Use /api/products");
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});