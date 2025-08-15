import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import data from './data.js';
import cors from 'cors';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Product routes
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find(p => p._id.toString() === productId.toString());
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ 
      error: `Product ${productId} not found`,
      availableIds: data.products.map(p => p._id)
    });
  }
});

app.get("/api/products", (req, res) => {
  res.json(data.products);
});

app.get("/", (req, res) => {
  res.send("Server is ready. Access /api/products for product data");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});