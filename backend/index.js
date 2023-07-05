const express = require("express");
const mongoose = require("mongoose");
const Product = require("./Models/product");
const cors = require("cors");
const CartItem = require("./Models/cart");

const app = express();
const PORT = 3000;
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/shopping", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

// Event handler for successful connection
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Event handler for connection error
mongoose.connection.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error);
});

// Get all products
app.get("/products", (req, res) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      console.error("Error retrieving products:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

// Get a single product by ID
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;

  Product.findById(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    })
    .catch((error) => {
      console.error("Error retrieving product:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.post("/cart", (req, res) => {
  const { name, quantity, price, url } = req.body;

  const newItem = new CartItem({ name, quantity, price, url });

  newItem
    .save()
    .then((item) => {
      res.json(item);
    })
    .catch((error) => {
      console.error("Error saving item:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.get("/cart", (req, res) => {
  CartItem.find()
    .then((items) => {
      res.json(items);
    })
    .catch((error) => {
      console.error("Error retrieving items:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.delete("/cart/:id", (req, res) => {
  const itemId = req.params.id;
  CartItem.findByIdAndDelete(itemId)
    .then(() => {
      res.status(200).json({ message: "Item deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting item:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
