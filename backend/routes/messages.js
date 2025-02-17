const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

let messages = [];

router.post("/", auth, (req, res) => {
  const message = { sender: req.user.id, content: req.body.content };
  messages.push(message);
  res.status(201).json({ message: "Message sent" });
});

router.get("/", auth, (req, res) => {
  res.json(messages);
});

module.exports = router;
