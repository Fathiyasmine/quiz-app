const express = require("express");
const router = express.Router();
const { getAllQuizzes, getQuizById } = require("../controllers/quizController");
const protect = require("../middleware/authMiddleware");
const Quiz = require("../models/Quiz"); // ← ajoute cette ligne

router.get("/", protect, getAllQuizzes);
router.get("/:id", protect, getQuizById);

router.post("/", protect, async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
