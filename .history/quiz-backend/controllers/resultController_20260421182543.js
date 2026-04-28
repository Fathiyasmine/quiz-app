const Result = require("../models/Result");

exports.saveResult = async (req, res) => {
  const { quiz, score, total, timeTaken } = req.body;
  try {
    const result = await Result.create({
      user: req.user._id,
      quiz,
      score,
      total,
      timeTaken,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyResults = async (req, res) => {
  try {
    const results = await Result.find({ user: req.user._id }).populate(
      "quiz",
      "title",
    );
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
