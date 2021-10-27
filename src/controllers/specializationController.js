const Specialization = require("../models/Specialization");
const saveSpecialization = async (req, res) => {
  try {
    const data = req.body;

    const response = await Specialization.create(data);
    res.json(response);
  } catch (err) {
    res
      .status(401)
      .json({ error: err.message + "Error saving Specialization" });
  }
};
const getAllSpecializations = async (req, res) => {
  try {
    const response = await Specialization.find();
    res.json(response);
  } catch (err) {
    res
      .status(401)
      .json({ error: err.message + "Error Getting Specialization" });
  }
};
const getSpecialization = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Specialization.findOne({ _id: id });
    res.json(response);
  } catch (err) {
    res
      .status(401)
      .json({ error: err.message + "Error Getting Specialization" });
  }
};
module.exports = {
  saveSpecialization,
  getAllSpecializations,
  getSpecialization,
};
