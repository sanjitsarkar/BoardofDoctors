const {
  saveLocation,
  getAllLocations,
  getLocation,
} = require("../controllers/locationController");
const express = require("express");
const router = express.Router();
router.post("/save", saveLocation);
router.get("/", getAllLocations);
router.get("/:id", getLocation);

module.exports = router;
