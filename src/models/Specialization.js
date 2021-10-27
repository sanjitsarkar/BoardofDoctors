const { Schema, model } = require("mongoose");

const specializationSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Specialization", specializationSchema);
