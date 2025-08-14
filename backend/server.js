import express from 'express';
import data from './data.js';

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running. Access products at /api/products");
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
  console.log(`Access products at http://localhost:${PORT}/api/products`);
});