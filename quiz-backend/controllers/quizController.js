const Quiz = require("../models/Quiz");

exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().select("-questions.correctAnswer");
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id).select(
      "-questions.correctAnswer",
    );
    if (!quiz) return res.status(404).json({ message: "Quiz introuvable" });
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getQuizByLocalId = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ id: parseInt(req.params.id) });
    if (!quiz) return res.status(404).json({ message: "Quiz introuvable" });
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
