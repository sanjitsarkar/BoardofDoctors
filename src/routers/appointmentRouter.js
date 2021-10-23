const { saveAppointment } = require("../controllers/appointmentController");
const express = require("express");
const router = express.Router();
router.post("/save", saveAppointment);
module.exports = router;
