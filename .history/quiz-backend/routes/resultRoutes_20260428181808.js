const express = require("express");
const router = express.Router();
const { saveResult, getMyResults } = require("../controllers/resultController");
const protect = require("../middleware/authMiddleware");

router.post("/me", protect, getMyResults);
router.get("/", protect, saveResult);

module.exports = router;
