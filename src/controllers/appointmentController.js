const Appointment = require("../models/Appointment");
const saveAppointment = async (req, res) => {
  try {
    const data = req.body;

    const response = await Appointment.create(data);
    res.json(response);
  } catch (err) {
    res.status(401).json({ error: err.message + "Error saving appointment" });
  }
};
const searchAppointment = async (req, res) => {
  try {
    const { locationId, isAvailable, specializationId } = req.query;
    // const response = req.query;
    // console.log(typeofspecializationId);
    // let response;
    let filter;
    if (locationId !== "undefined") {
      filter = {
        locationId,
      };
    }
    if (specializationId !== "undefined") {
      filter = {
        ...filter,
        specializationId: { $in: [specializationId] },
      };
    }
    if (isAvailable !== "undefined") {
      filter = {
        ...filter,
        isAvailable,
      };
    }
    console.log("filter", filter);
    response = await Appointment.find(filter).sort({ updatedAt: -1 });
    res.json(response);
    // res.json({ location, isAvailable, specialization });
  } catch (err) {
    res
      .status(401)
      .json({ error: err.message + "Error searching appointments" });
  }
};
const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Appointment.findByIdAndDelete(id);
    res.json(response);
  } catch (err) {
    res.status(401).json({ error: err.message + "Error deleting appointment" });
  }
};
const updateAppointment = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;

    const response = await Appointment.findByIdAndUpdate(id, body);
    res.json(response);
  } catch (err) {
    res.status(401).json({ error: err.message + "Error updating appointment" });
  }
};
const getAllAppointments = async (req, res) => {
  try {
    const response = await Appointment.find().sort({ updatedAt: -1 }).limit(10);
    res.json(response);
  } catch (err) {
    res
      .status(401)
      .json({ error: err.message + "Error fetching appointments" });
  }
};
const getAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Appointment.find({ _id: id });
    res.json(response);
  } catch (err) {
    res.status(401).json({ error: err.message + "Error fetching appointment" });
  }
};

module.exports = {
  saveAppointment,
  deleteAppointment,
  getAllAppointments,
  getAppointment,
  updateAppointment,
  searchAppointment,
};
