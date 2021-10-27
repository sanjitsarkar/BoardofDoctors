const Location = require("../models/Location");
const saveLocation = async (req, res) => {
  try {
    const data = req.body;

    const response = await Location.create(data);
    res.json(response);
  } catch (err) {
    res.status(401).json({ error: err.message + "Error saving Location" });
  }
};
const getAllLocations = async (req, res) => {
  try {
    const response = await Location.find();
    res.json(response);
  } catch (err) {
    res.status(401).json({ error: err.message + "Error Getting Locations" });
  }
};
const getLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Location.find({ _id: id });
    res.json(response);
  } catch (err) {
    res.status(401).json({ error: err.message + "Error Getting Location" });
  }
};
module.exports = { saveLocation, getAllLocations, getLocation };
