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

module.exports = router;
