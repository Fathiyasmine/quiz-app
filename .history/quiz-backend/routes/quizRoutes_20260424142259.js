const express = require("express");
const router = express.Router();
const { getAllQuizzes, getQuizById } = require("../controllers/quizController");
const protect = require("../middleware/authMiddleware");
const Quiz = require("../models/Quiz");

router.post("/", protect, async (req, res) => {
  const quiz = await Quiz.create(req.body);
  res.status(201).json(quiz);
});
router.get("/", protect, getAllQuizzes);
router.get("/:id", protect, getQuizById);

module.exports = router;
