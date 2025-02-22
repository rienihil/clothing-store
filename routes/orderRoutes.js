const express = require("express");
const Order = require("../models/Order");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user_id: req.user.userId }).populate("products.product_id");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { user_id, products } = req.body;
    const newOrder = new Order({ user_id, products });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
