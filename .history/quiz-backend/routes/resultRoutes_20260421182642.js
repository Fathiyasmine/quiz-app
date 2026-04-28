const express = require("express");
const router = express.Router();
const { saveResult, getMyResults } = require("../controllers/resultController");
const protect = require("../middleware/authMiddleware");

router.post("/", protect, saveResult);
router.get("/me", protect, getMyResults);

module.exports = router;
