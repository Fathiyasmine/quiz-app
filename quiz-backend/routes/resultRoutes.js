const express = require("express");
const router = express.Router();
const { saveResult, getMyResults } = require("../controllers/resultController");
const protect = require("../middleware/authMiddleware");

router.get("/me", protect, getMyResults);
router.post("/", protect, saveResult);

module.exports = router;
