const {
  saveSpecialization,
  getAllSpecializations,
  getSpecialization,
} = require("../controllers/specializationController");
const express = require("express");
const router = express.Router();
router.post("/save", saveSpecialization);
router.get("/", getAllSpecializations);
router.get("/:id", getSpecialization);

module.exports = router;
