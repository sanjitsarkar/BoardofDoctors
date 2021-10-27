const {
  saveAppointment,
  getAllAppointments,
  getAppointment,
  deleteAppointment,
  updateAppointment,
  searchAppointment,
} = require("../controllers/appointmentController");
const express = require("express");
const router = express.Router();
router.post("/save", saveAppointment);
router.get("/search", searchAppointment);
router.get("/", getAllAppointments);
router.get("/:id", getAppointment);
router.delete("/:id", deleteAppointment);
router.put("/:id", updateAppointment);

module.exports = router;
