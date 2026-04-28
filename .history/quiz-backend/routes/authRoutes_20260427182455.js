const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
// route temporaire - à supprimer après vérification
router.get("/me/debug", authMiddleware, async (req, res) => {
  res.json({
    userId: req.user.id || req.user._id,
    email: req.user.email,
  });
});
router.post("/register", register);
router.post("/login", login);

module.exports = router;
