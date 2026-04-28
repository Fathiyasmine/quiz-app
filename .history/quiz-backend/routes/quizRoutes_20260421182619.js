const express = require("express");
const router = express.Router();
const { getAllQuizzes, getQuizById } = require("../controllers/quizController");
const protect = require("../middleware/authMiddleware");

router.get("/", protect, getAllQuizzes);
router.get("/:id", protect, getQuizById);

module.exports = router;
