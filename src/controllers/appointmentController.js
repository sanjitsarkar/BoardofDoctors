const Appointment = require("../models/Appointment");
const saveAppointment = async (req, res) => {
  try {
    const data = req.body;

    // const appointment = new Appointment();
    const response = await Appointment.create(data);
    res.json(data);
  } catch (err) {
    res.status(401).json({ error: err.message + "Error saving appointment" });
  }
};
const searchAppointment = (req, res) => {};
const deleteAppointment = (req, res) => {};
const updateAppointment = (req, res) => {};
const getAllAppointment = (req, res) => {};
const getAppointment = (req, res) => {};

module.exports = {
  saveAppointment,
  deleteAppointment,
  getAllAppointment,
  getAppointment,
  updateAppointment,
  searchAppointment,
};
