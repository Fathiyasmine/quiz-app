const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    // Avant : quiz: { type: ObjectId, required: true }  ← plante avec un id local
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: false,
    },
    quizLocalId: { type: String }, // pour stocker l'id local en string

    score: { type: Number, required: true },
    total: { type: Number, required: true },
    timeTaken: { type: Number },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Result", resultSchema);
