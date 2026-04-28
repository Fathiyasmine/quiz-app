const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String },
    questions: [
      {
        question: { type: String, required: true },
        options: [String],
        correctAnswer: { type: Number, required: true }, // index de la bonne réponse
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Quiz", quizSchema, "quiz");
