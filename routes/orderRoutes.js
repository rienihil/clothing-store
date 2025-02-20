const express = require("express");
const Order = require("../models/Order");
const jwt = require("jsonwebtoken");
const router = express.Router();

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Нет доступа" });

  try {
    const decoded = jwt.verify(token.split(" ")[1], "secret_key");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ error: "Неверный токен" });
  }
};


router.get("/", authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user_id: req.user.userId }).populate("products.product_id");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
