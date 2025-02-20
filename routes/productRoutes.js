const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      style,
      price,
      rating,
      size,
      season,
      material,
      decoration,
      pattern_type,
      recommendation,
      fabric_type,
      neck_line,
      sleeve_length
    } = req.body;

    const newProduct = new Product({
      style,
      price,
      rating,
      size,
      season,
      material,
      decoration,
      pattern_type,
      recommendation,
      fabric_type,
      neck_line,
      sleeve_length
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;